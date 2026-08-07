<template>
    <div>
        <div class="loading" v-if="loading">Loading...</div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <div v-if="post" class="content px-2 py-4">

            <img v-if="post.coverImage" :src="imageUrlFor(post.coverImage)" class="w-full h-auto" />
            <br />
            <h1 class="text-5xl">{{ post.title }}</h1>
            <br />

            <SanityBlocks :blocks="blocks" />
            <h6 class="flex items-center ">
                <img v-if="post.authorImage" :src="imageUrlFor(post.authorImage)" class="w-16 h-16 rounded-full mr-2" />
                By: {{ post.name }}
            </h6>


            <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div v-for="(imageC, index) in post.images" :key="index" class="image-container">
                    <img :src="convertImageUrl(imageC.image.asset._ref)" class="w-full h-auto rounded" />
                </div>
            </div>


        </div>
    </div>
</template>
  
<script>
import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "../assets/client";
import imageUrlBuilder from "@sanity/image-url";

const imageBuilder = imageUrlBuilder(sanity);

const query = `*[slug.current == $slug] {
    _id,
    title,
    slug,
    body, 
   "image": mainImage{
    asset->{
    _id,
    url
  }
  },
  "coverImage": coverImage{
    asset->{
    _id,
    url
  }
  },
  "name":author->name,
  images,
  "authorImage":author->image
  }[0]
  `;

export default {
    name: "SinglePost",
    components: { SanityBlocks },
    data() {
        return {
            loading: true,
            post: [],
            blocks: [],
        };
    },
    created() {
        this.fetchData();
    },
    methods: {

        convertImageUrl(imageUrl) {
            // Replace "image-" with an empty string
            let modifiedUrl = imageUrl.replace("image-", "");

            // Replace the last "-" with a "."
            modifiedUrl = modifiedUrl.replace("-jpg", ".jpg");
            modifiedUrl = modifiedUrl.replace("-png", ".png");
            console.log('https://cdn.sanity.io/images/i32b0q2c/production/' + modifiedUrl)
            return 'https://cdn.sanity.io/images/i32b0q2c/production/' + modifiedUrl;
        },
        imageUrlFor(source) {
            return imageBuilder.image(source);
        },
        fetchData() {
            this.error = this.post = null;
            this.loading = true;

            sanity.fetch(query, { slug: "walk-the-path-of-a-champion" }).then(
                (post) => {
                    this.loading = false;
                    this.post = post;
                    this.blocks = post.body;
                    console.log(post.images[1].image.asset._ref)

                },
                (error) => {
                    this.error = error;
                }
            );
        },
    },
};
</script>
  
<style scoped>
.content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 72em;
}

h1 {
    text-align: center;
}

h6 {
    color: #aaa;
    padding: 1em;
}

.image-container {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
}

.image-container:hover {
    transform: scale(1.05);
}

.image-expanded {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.image-expanded img {
    max-width: 90%;
    max-height: 90%;
}
</style>