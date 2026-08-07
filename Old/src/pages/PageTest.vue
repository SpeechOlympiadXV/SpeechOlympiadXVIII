<template>
    <div :class="['transition-all bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm text-gray-100 mt-10 mb-10 rounded-lg mr-auto', post ? 'w-[98%] ml-[1%] md:w-[95%] md:ml-[2.5%]' : 'w-[90%] ml-[5%]']">
      <div class="container mx-auto px-4 py-8 w-full">
        <div class="w-full flex flex-col items-start mb-9">
          <div class="pl-5 text-3xl lg:text-4xl font-semibold tracking-[-2px] leading-2 text-white">
            Past Experiences
          </div>
        </div>
        <div v-if="slug">
          <div v-if="loading2" class="text-center text-2xl font-semibold">Loading...</div>
  
          <div v-if="error" class="bg-red-800 border-l-4 border-red-500 text-white p-4" role="alert">
            <p class="font-bold">Error</p>
            <p>{{ error }}</p>
          </div>
  
          <div v-if="post" class="backdrop-brightness-150 bg-opacity-50 rounded-lg shadow-lg overflow-hidden">
            <button @click="closePost" class="absolute z-30 top-4 left-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
  
            <div class="p-4 mt-4">
              <img v-if="post.coverImage" :src="imageUrlFor(post.coverImage)" class="w-full h-64 object-cover rounded-lg" />
            </div>
  
            <div class="p-6">
              <div class="text-center mb-12"> <!-- Added wrapper div with text-center -->
                <h1 class="text-4xl font-bold text-white border-b border-[#edc001] pb-2 inline-block"> <!-- Added inline-block -->
                  {{ post.title }}
                </h1>
              </div>
              <div class="blog-container">
                <div class="max-w-[920px] mx-auto">
                  <SanityBlocks :blocks="blocks" class="prose prose-invert prose-lg blog-content" />
                </div>
              </div>
              
              <div class="mt-8 flex items-center">
                <img v-if="post.authorImage" :src="imageUrlFor(post.authorImage)" class="w-12 h-12 rounded-full mr-4" />
                <p class="text-sm text-gray-300">By: {{ post.name }}</p>
              </div>
            </div>
  
            <div class="px-6 py-4">
              <h2 class="text-2xl font-semibold mb-4 text-white">Blog Photos</h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="(imageC, index) in post.images" :key="index" class="aspect-w-1 aspect-h-1">
                  <img 
                    @click="showImageModal(convertImageUrl(imageC.image.asset._ref))"
                    :src="convertImageUrl(imageC.image.asset._ref)" 
                    class="w-full h-full object-cover rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-[1.01]"
                  />
                </div>
              </div>
            </div>
          </div>
  
          <!-- Image Modal -->
          <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center">
            <div class="absolute inset-0 bg-black opacity-75"></div>
            <div class="relative z-10 max-w-4xl w-full">
              <button @click="closeImageModal" class="absolute top-4 right-4 z-40 text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img :src="modalImageUrl" class="w-full h-auto max-h-screen" />
            </div>
          </div>
        </div>
  
        <div v-if="loadBlog" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 pr-4">
          <div v-for="post in posts" :key="post._id" class="backdrop-brightness-150 bg-opacity-50 rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.01]">
            <div class="p-4">
              <img class="w-full h-48 object-cover rounded-lg" :src="imageUrlFor(post.image)" :alt="post.title" />
            </div>
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2 text-white">{{ post.title }}</h2>
              <p class="text-gray-300 mb-4">{{ post.description }}</p>
              <button 
                @click="handleReadmore(post.slug.current)"
                class="bg-[#EDC001cc] hover-effect text-gray-100 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import sanity from "../assets/client";
  import { SanityBlocks } from "sanity-blocks-vue-component";
  import imageUrlBuilder from "@sanity/image-url";
  
  const imageBuilder = imageUrlBuilder(sanity);
  
  export default {
    name: "EnhancedBlogComponent",
    components: { SanityBlocks },
    props: {
      limit: {
        type: Number,
        default: 50
      }
    },
    data() {
      return {
        loading: true,
        loading2: true,
        loadBlog: true,
        slug: '',
        posts: [],
        post: null,
        blocks: [],
        showModal: false,
        modalImageUrl: '',
        error: null
      };
    },
    created() {
      this.fetchData();
    },
    mounted(){
        const options = {
            root: null, // Use the viewport as the root
            threshold: 0.1, // Trigger when 10% of the component is visible
        };

        this.observer = new IntersectionObserver(this.handleIntersection, options);
        this.observer.observe(this.$el); // Observe the component's root element
    },
    unmounted() {
        // Cleanup: disconnect the observer
        if (this.observer) {
        this.observer.disconnect();
        }
        // Ensure event listeners are removed
        this.removeEventListeners();
    },
    methods: {
        handleIntersection(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                // Component is in the viewport, add event listeners
                this.addEventListeners();
                } else {
                // Component is out of the viewport, remove event listeners
                this.removeEventListeners();
                }
            });
        },
        addEventListeners() {
            // Add touch and key event listeners
            console.log("Adding event listenrs to blogs")
            window.addEventListener('keydown', this.handleKeyPress);
            window.addEventListener('touchstart', this.handleTouchStart);
            window.addEventListener('touchend', this.handleTouchEnd);
        },
        removeEventListeners() {
            // Remove touch and key event listeners
            console.log("removing event listenrs from blogs")
            window.removeEventListener('keydown', this.handleKeyPress);
            window.removeEventListener('touchstart', this.handleTouchStart);
            window.removeEventListener('touchend', this.handleTouchEnd);
        },
        handleKeyPress(event) {
            event.stopPropagation();
            // Close the post when the Escape key is pressed
            if (event.key === 'Escape') {
                this.closePost();
            }
        },
        handleTouchStart(event) {
            event.stopPropagation();
            // Record the initial touch point
            this.touchStartX = event.changedTouches[0].screenX;
        },
        handleTouchEnd(event) {
            event.stopPropagation();
            // Record the final touch point
            this.touchEndX = event.changedTouches[0].screenX;
            this.detectSwipe();
        },
        detectSwipe() {
            const threshold = 50; // Minimum distance for swipe detection
            const swipeDistance = this.touchEndX - this.touchStartX;

            if (swipeDistance > threshold) {
                // Swipe right detected
                this.closePost();
            }
        },
      imageUrlFor(source) {
        return imageBuilder.image(source);
      },
      showImageModal(imageUrl) {
        this.modalImageUrl = imageUrl;
        this.showModal = true;
      },
      closeImageModal() {
        this.modalImageUrl = '';
        this.showModal = false;
      },
      convertImageUrl(imageUrl) {
        let modifiedUrl = imageUrl.replace("image-", "").replace(/-(?!.*-)/, ".");
        return `https://cdn.sanity.io/images/i32b0q2c/production/${modifiedUrl}`;
      },
      closePost() {
        this.slug = null;
        this.loadBlog = true;
        this.post = null;
      },
      handleReadmore(slug) {
        const query = `*[slug.current == $slug] {
          _id, title, slug, body, 
          "image": mainImage.asset->,
          "coverImage": coverImage.asset->,
          "name": author->name,
          images,
          "authorImage": author->image
        }[0]`;
        
        this.slug = slug;
        this.loadBlog = false;
        this.loading2 = true;
        
        sanity.fetch(query, { slug: this.slug }).then(
          (post) => {
            this.loading2 = false;
            this.post = post;
            this.blocks = post.body;
          },
          (error) => {
            this.error = error;
            this.loading2 = false;
          }
        );
      },
      fetchData() {
        const query = this.limit === 2
          ? `*[_type == "post" && (slug.current in ["so-xv-the-grand-finale", "the-preliminary-round-of-speech-olympiad-xv", "speech-olympiad-xv-the-semi-final-round"])] {
              _id, title, slug, description,
              "image": mainImage.asset->,
              "name": author->name,
              excerpt
            }`
          : `*[_type == "post"] {
              _id, title, slug, description,
              "image": mainImage.asset->,
              "name": author->name,
              excerpt
            }[0..${this.limit}]`;
  
        this.loading = true;
        sanity.fetch(query).then(
          (posts) => {
            this.loading = false;
            this.posts = posts;
          },
          (error) => {
            this.error = error;
            this.loading = false;
          }
        );
      },
    },
  };
  </script>
  
  <style scoped>
  /* Blog container and content formatting */
  .blog-container {
    width: 100%;
    max-width: none;
    text-align: left;
    margin: 0;
    padding: 0 2rem;
  }

  .prose {
    color: rgb(243 244 246);
    font-size: 1.25rem; /* Increased from 1.125rem */
    line-height: 2; /* Increased from 1.8 for better readability */
    text-align: left;
    max-width: none !important;
  }

  /* Paragraph styling */
  .prose p {
    margin: 2rem 0; /* Increased from 1.75rem */
    text-align: justify;
    text-justify: inter-word;
    max-width: 75ch;
    padding-right: 1.5rem; /* Increased from 1rem */
    font-weight: 400; /* Added for better visibility */
  }

  /* First paragraph emphasis - make it even larger */
  .prose p:first-of-type {
    font-size: 1.4rem; /* Increased from 1.25rem */
    font-weight: 400;
    color: rgb(229 231 235);
    line-height: 1.7;
    font-style: italic;
    border-left: 4px solid rgb(251 191 36);
    padding-left: 1.5rem;
    margin: 2.5rem 0;
  }

  /* Headings */
  .prose h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: rgb(255 255 255);
    margin: 2.5rem 0 1.5rem 0;
    border-bottom: 2px solid rgba(237, 192, 1, 0.4);
    padding-bottom: 0.5rem;
  }

  .prose h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(251 191 36);
    margin: 2rem 0 1rem 0;
  }

  /* Lists */
  .prose ul, .prose ol {
    margin: 1.5rem 0 1.5rem 2rem;
    color: rgb(229 231 235);
  }

  .prose li {
    margin-bottom: 0.75rem;
    line-height: 1.6;
  }

  .prose li::marker {
    color: rgb(251 191 36);
  }

  /* Quotes */
  .prose blockquote {
    border-left: 4px solid rgb(251 191 36);
    padding: 1.5rem 2rem;
    margin: 2rem 0;
    background: linear-gradient(135deg, rgba(237, 192, 1, 0.1), rgba(0, 0, 0, 0));
    border-radius: 0 0.5rem 0.5rem 0;
  }

  .prose blockquote p {
    font-style: italic;
    color: rgb(209 213 219);
  }

  /* Images */
  .prose img {
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
    margin: 2.5rem auto;
    max-width: 100%;
    height: auto;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .blog-container {
      padding: 0 1rem;
    }

    .prose {
      font-size: 1.125rem; /* Increased from 1rem */
      line-height: 1.8;
    }

    .prose p:first-of-type {
      font-size: 1.25rem;
    }

    .prose h2 {
      font-size: 1.5rem;
    }

    .prose h3 {
      font-size: 1.25rem;
    }
  }
  </style>