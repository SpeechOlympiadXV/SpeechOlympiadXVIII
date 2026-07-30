<template>
    <div>
        <h1>Blog List</h1>
        <ul>
            <li v-for="blog in blogs" :key="blog._id">
                <h2>{{ blog.title }}</h2>
                <img :src="blog.mainImage.asset.url" alt="Main Image" />
                <p>Author: {{ blog.author.name }}</p>
                <p>Published at: {{ blog.publishedAt }}</p>
                <p v-html="blog.body"></p>
            </li>
        </ul>
    </div>
</template>
  
<script>
import axios from 'axios';
import { useSanityFetcher } from 'vue-sanity'
export default {
    props: {
        limit: Number
    },
    setup() {


        // OR use a factory function
        const { data: blogs } = useSanityFetcher(
            () => `*[_type == 'post'] {
               _id,
               title,
               author {
                 name,
               },
               mainImage {
                 asset {
                   url,
                 },
               },
               publishedAt,
               body,
            } `, {
            type: 'post',
        }
        )
        console.log(blogs)
        return { blogs };
    },

};
</script>
  
<style>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    border: 1px solid black;
    padding: 10px;
}

h2 {
    margin-top: 0;
}

img {
    width: 100px;
}
</style>
  