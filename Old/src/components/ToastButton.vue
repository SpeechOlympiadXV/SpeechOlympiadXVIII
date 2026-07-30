<template>
    <div class="fixed bottom-0 right-0 flex flex-col items-end pr-4 pb-4 z-50">
      <a 
        :href="href" 
        target="_blank" 
        class="hover:shadow-md hover:shadow-[#edc00155] hover:text-gray-100 bg-gray-700 bg-gradient-to-br transition-all duration-500 from-[#EDC001aa] via-[#EDC001] to-[#EDC001aa] px-2 py-2 w-36 h-16 text-center text-gray-800 rounded-lg text-md font-bold"
      >
        {{ message }}
      </a>
      <!-- Spacer for bottom margin -->
      <div class="h-2 w-full"></div>
    </div>
</template>
  
<script setup lang="ts">
  defineProps({
    message: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  })
</script>