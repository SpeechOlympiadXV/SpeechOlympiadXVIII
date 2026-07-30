<template>
    <div
        :class="[backgroundColorClass, 'border', 'border-purple-500', 'bg-opacity-90', 'hover:bg-opacity-100', 'rounded-lg', 'p-4', 'my-3', 'md:my-0', 'w-full', 'cursor-pointer']">
        <h5 class="text-left font-bold text-gold-300 text-4xl mb-2 border-b-2 border-crimson-500 pb-2" v-html="title"></h5>
        <div class="md:flex ">
            <div class="md:w-1/3 md:flex md:justify-center my-4">
                <img alt="" :src="imageSrc" class="w-24 h-24 rounded-full mx-auto" loading="lazy">
            </div>
            <div class="md:w-2/3 card-body ">

                <h6 class="text-left text-gray-300 mt-3 mb-2">{{ subtitle }}</h6>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "ChampStory",
    props: {
        imageSrc: String,
        title: String,
        subtitle: String,
        body: String,
        backgroundColorClass: String, // New prop for custom background class
    },
};
</script>
