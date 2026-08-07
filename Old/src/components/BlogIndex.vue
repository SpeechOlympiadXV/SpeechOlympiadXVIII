<script setup>
    import { ref } from 'vue';
    import sanity from "../assets/client";
    import imageUrlBuilder from "@sanity/image-url";

    const posts = ref([]);
    const loading = ref(true);

    const {limit = 2} = defineProps({
        limit: Number,
    });

    const imageUrlFor = (source) => {
        return imageBuilder.image(source);
    }

    const handleClick = (id) => {
        console.log(id)
    }

    const imageBuilder = imageUrlBuilder(sanity);

    const query =
        limit === 2
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
        }[0..${limit}]`;

    sanity.fetch(query).then(
        (res) => {
            loading.value = false;
            posts.value = res;
        }
    );
</script>

<template>
    <div
        :class="[
            'transition-all bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm text-gray-100 mt-10 mb-10 rounded-lg mr-auto w-[90%] ml-[5%]',

        ]"
    >
        <div class="container mx-auto px-4 py-8 w-full">
            <div v-if="loading">Loading...</div>
            <div v-if="!loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-4 pr-4">
                <div
                    v-for="post in posts"
                    :key="post._id"
                    class="backdrop-brightness-150 bg-opacity-50 rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.01]"
                >
                    <div class="p-4">
                        <img
                            class="w-full h-48 object-cover rounded-lg"
                            :src="imageUrlFor(post.image)"
                            :alt="post.title"
                        />
                    </div>
                    <div class="p-6">
                        <h2 class="text-xl font-semibold mb-2 text-white">
                            {{ post.title }}
                        </h2>
                        <p class="text-gray-300 mb-4">{{ post.description }}</p>
                        <button
                            @click="handleClick(post._id)"
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
