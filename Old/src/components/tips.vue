<template>
    <div class="carousel-container">
        <div class="carousel" :style="slideStyle">

            <div class="carousel-item" v-for="(post, index) in posts" :key="index">
                <!-- Your card content here -->
                <div
                    class="max-w-sm border mt-4 border-gray-200 rounded-lg shadow bg-gray-800 bg-opacity-25 border-gray-700">
                    <a href="#">
                        <img class="w-full h-auto" :src="post.imageUrl" alt="" />
                    </a>
                    <div class="p-2">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{ post.title }}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-400">{{ post.description }}</p>
                        <a @click="handleReadmore(post.slug)"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none bg-amber-600 hover:bg-amber-700 focus:ring-amber-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-button prev" @click="prevSlide">Previous</button>
        <button class="carousel-button next" @click="nextSlide">Next</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            currentIndex: 0,
            slideWidth: 0,
            posts: [
                {
                    title: 'Post 1',
                    description: 'Description for Post 1',
                    imageUrl: 'https://via.placeholder.com/300x200',
                    slug: 'post-1',
                },
                {
                    title: 'Post 2',
                    description: 'Description for Post 2',
                    imageUrl: 'https://via.placeholder.com/300x200',
                    slug: 'post-2',
                },
                {
                    title: 'Post 3',
                    description: 'Description for Post 3',
                    imageUrl: 'https://via.placeholder.com/300x200',
                    slug: 'post-3',
                },
                // Add more posts as needed
            ],
        };
    },
    props: {
        // Array of post objects
    },
    methods: {
        prevSlide() {
            this.currentIndex = Math.max(this.currentIndex - 1, 0);
        },
        nextSlide() {
            const maxIndex = Math.max(this.posts.length - 3, 0);
            this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
        },
        handleReadmore(slug) {
            // Implement your read more logic here
            // For example, you can navigate to the post page
            console.log(`Read more clicked for slug: ${slug}`);
        },
    },
    computed: {
        slideStyle() {
            return {
                transform: `translateX(-${this.currentIndex * this.slideWidth}px)`,
            };
        },
    },
    mounted() {
        // Calculate the slide width based on the number of cards to display
        this.slideWidth = document.querySelector('.carousel-item').offsetWidth;
    },
};
</script>
  
<style scoped>
.carousel-container {
    position: relative;
    overflow: hidden;
}

.carousel {
    display: flex;
    transition: transform 0.3s ease;
}

.carousel-item {
    flex: 0 0 auto;
    margin-right: 20px;
    /* Adjust as needed */
}

.carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
}

.carousel-button.prev {
    left: 0;
}

.carousel-button.next {
    right: 0;
}
</style>
  