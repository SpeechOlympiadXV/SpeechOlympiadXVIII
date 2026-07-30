<template>
  <!-- OLD SHADOW: backdrop-brightness-150 bg-gradient-to-b md:bg-gradient-to-r from-[#282828] to-black shadow-md -->
    <div class="m-10 flex flex-col md:flex-row gap-6 w-[90%] md:w-[80%] rounded-2xl mx-auto bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm shadow-black relative">
      <!-- Content Section -->
      <div class="flex-1 space-y-4 p-9">
        <h2 class="text-3xl lg:text-4xl font-semibold text-white tracking-[-2px] leading-2">
          {{ heading }}
        </h2>
        
        <div class="text-gray-300 leading-6 text-left text-lg font-thin">
          {{ text }}
        </div>
        
        <button @click="click(urlString)" class="flex h-10 font-semibold mt-10 items-center px-4 py-2 bg-[#EDC001cc] text-gray-100 rounded-lg hover-effect">
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-4 w-4 ml-2 mt-[2px]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      
      <!-- Image Section -->
      <div class="w-full md:w-1/3 h-full flex flex-col justify-center">
        <img 
          :src="image" 
          alt="Description" 
          class="w-full h-64 object-cover rounded-lg"
        />
      </div>
    </div>
</template>
  
<script setup>
defineProps({
  index: Number,
  heading: String,
  headingEnd: String,
  text: String,
  image: String,
  urlString: String,
})

function click(urlString) {
  window.location.href = urlString
}
</script>

<style>
  .hover-effect {
    transition: all 0.3s;
  }

  .hover-effect:hover {
    background-color: #EDC001aa;
    text-shadow: 0 0 1px #ffffff;
  }
</style>