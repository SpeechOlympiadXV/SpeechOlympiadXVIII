<script setup>
import { ref, computed } from 'vue'
import SOLogo from "./SOLogo.vue";

const navigation = [
  { name: 'Home', href: '#', current: true, class : 'text-white' },
  { name: 'About', href: '#about', current: false, class: 'text-white' },
  { name: "Champion's Story", href: "#champions-story", current: false, class: 'text-white' },
  { name: 'Technical Tips', href: '#technical-tips', current: false, class: 'text-white' },
  { name: 'Finalists', href: '#finalists', current: false, class: 'text-white' }, // Changed from '#/finalists' to '#finalists'
  { name: 'Gallery', href: '#gallery', current: false, class: 'text-white' },
  { name: 'Rules & Regulations', href: '#rules', current: false, class: 'text-white' },
  { name: 'Blogs', href: '#blogs', current: false, class: 'text-white' },
]

// const activeItemIndex = ref(getActiveItem());
const activeURL = ref("#")
const mobileMenuOpen = ref(false);

window.addEventListener("hashchange", () => {
  activeURL.value = window.location.hash
  if (!activeURL.value) {
    activeURL.value = "#"
  }
});

</script>

<template>
  <nav class="bg-inherit sticky w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <SOLogo class="w-auto h-24" />
        </div>
        <div class="hidden xl:block ml-auto">
          <div class="flex items-center space-x-4">
            <a 
              v-for="item in navigation" 
              :key="item.name" 
              :href="item.href"
              :class="[
                activeURL === item.href ? 'backdrop-brightness-150' : 'transition duration-200 hover:backdrop-brightness-150',
                'px-3 py-2 rounded-md text-sm font-semibold ' + item.class
              ]"
              :aria-current="activeURL === item.href ? 'page' : undefined"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
        <div class="xl:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            type="button" 
            :class="{
              'inline-flex items-center justify-center p-2 rounded-md text-white transition duration-200 hover:backdrop-brightness-150 focus:outline-none' : true,
              'backdrop-brightness-150': mobileMenuOpen,
            }" 
            aria-controls="mobile-menu" 
            :aria-expanded="mobileMenuOpen"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
      class="absolute z-20 bg-gradient-to-br from-[#181818] via-[#181818] to-[#282828] w-full rounded-b-2xl"
    >
      <div v-show="mobileMenuOpen" class="lg:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            v-for="item in navigation" 
            :key="item.name" 
            :href="item.href"
            :class="[
              activeURL === item.href ? 'backdrop-brightness-75' : 'hover:backdrop-brightness-75',
              'block px-3 py-2 rounded-md text-base font-medium text-white'
            ]"
            :aria-current="activeURL === item.href ? 'page' : undefined"
            @click="mobileMenuOpen = false"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>
