<template>
  <div :class="[
    backgroundColorClass,
    'border',
    'border-gray-200',
    'rounded-lg',
    'p-4',
    'my-3',
    'md:my-0',
    'w-full',
    'cursor-pointer',
    'technical-tips'
  ]" :style="[backgroundColorHash ? { backgroundColor: backgroundColorHash } : '']">
    <h5 class="text-left font-bold text-zinc-800 text-2xl sm:text-3xl xl:text-4xl  selector mb-2 border-b-2 border-zinc-500 pb-2" v-html="title">
    </h5>
    <div class="md:flex">
      <div class="md:w-1/3 md:flex md:justify-center my-4">
        <img alt="" :src="imageSrc" class="w-24 h-24 rounded-full mx-auto" loading="lazy" />
      </div>
      <div class="md:w-2/3 card-body rounded-lg p-4">
        <h6 class="text-left text-zinc-800 text-xs">{{ subtitle }}</h6>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "TestimonialCard",
  props: {
    imageSrc: String,
    title: String,
    subtitle: String,
    body: String,
    backgroundColorClass: String, // New prop for custom background class
    backgroundColorHash: String, // New prop for custom background color
  },
};
</script>

<style>
.technical-tips {
  opacity: 0.9;
}

.technical-tips:hover {
  opacity: 1;
}

.selector {
  text-shadow: 2px 2px 4px rgba(73, 73, 73, 0.5);
}
</style>