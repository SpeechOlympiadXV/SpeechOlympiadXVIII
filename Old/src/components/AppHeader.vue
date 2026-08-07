<template>
  <div class="headerbar">
    <nav class="bg-dark">
      <div class="container mx-auto px-4 py-2">
        <div class="flex items-start justify-between">
          <div id="logo" class="w-8 h-8 md:w-20 md:h-8">
            <a class="navbar-brand" href="/#">
              <!-- Change the logo to the correct source -->
              <SOLogo class="w-full h-full" />
            </a>
          </div>

          <button class="block md:hidden text-white hover:text-gray-300 focus:outline-none" type="button"
            @click="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Toggle navigation</span>
            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>


          <div class="hidden md:block">
            <ul class="flex space-x-4">
              <AppHeaderMenu />
            </ul>
          </div>
        </div>
      </div>

      <div class="md:hidden bg-dark" :class="{ 'block': mobileNavOpen, 'hidden': !mobileNavOpen }">
        <ul class="px-2 pt-2 pb-4 space-y-2">
          <AppHeaderMenu />
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import AppHeaderMenu from "./AppHeaderMenu.vue";
import SOLogo from "./SOLogo.vue";

export default {
  components: {
    AppHeaderMenu,
    SOLogo,
  },
  data() {
    return {
      mobileNavOpen: false,
    };
  },
};
</script>

<style scoped>
/* No need for scoped styles here, as Tailwind CSS classes are used */
</style>
