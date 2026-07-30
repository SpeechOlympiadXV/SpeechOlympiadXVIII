<script >
import Navbar from "./components/Navbar.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import PageRules from "./pages/PageRules.vue";
import PageHome from "./pages/PageHome.vue";
import PageAbout from "./pages/PageAbout.vue";
import PageTechnicalTips from "./pages/PageTechnicalTips.vue";
import PageComingSoon from "./pages/PageComingSoon.vue";
import PageGallery from "./pages/PageGallery.vue";
import Page404 from "./pages/Page404.vue";
import PageChampionsStory from "./pages/PageChampionsStory.vue"
import PageBlogs from './pages/PageBlogs.vue'
import PageTest from './pages/PageTest.vue';
import SinglePost from "./components/SinglePost.vue";
import PageForm from "./pages/PageForm.vue";
import { useSanityClient } from 'vue-sanity'
import PageAdmin from "./pages/PageAdmin.vue";
import PageFormNew from "./pages/PageFormNew.vue";
import Tips from "./components/tips.vue";
import PageTT from "./pages/PageTechTips.vue";
import PageRegister from "./pages/PageRegister.vue";
import PageBlog2 from "./pages/PageBlog2.vue"
import PageKasun from "./TechTips/Kasun.vue";
import Semi from "./pages/PageSemiFinalists.vue";
import Footer from "./components/Footer.vue";
import PageVote from "./pages/PageVote.vue";
import BookletSection from "./components/BookletSection.vue";
import PageFinalists from "./pages/PageFinalists.vue"; // Add this import

const routes = {
  "/": PageHome,
  "/about": PageAbout,
  "/champions-story": PageChampionsStory,
  "/technical-tips": PageTT,
  "/gallery": PageGallery,
  "/blogs": PageTest,
  "/rules": PageRules,
  "/finalists": PageFinalists, // Add this route
  "/thulasithan": PageVote,
  "/aloka" : PageVote,
  "/amirthavarshani" : PageVote,
  "/neelayadhakshi" : PageVote,
  "/afrah" : PageVote
  
};

export default {
  data() {

    return {
      currentPath: window.location.hash,
    };
  },
  components: {
    AppHeader,
    AppFooter,
    Navbar,
    Footer,
    // RibbonNotice,
    // ToastButton
  },
  methods : {
    // Might be usefull later for routes like /#about/param1/param2
    getHash() {
      return window.location.hash.split("/")[0];
    },
    getNthParam(n) {
      return window.location.hash.split("/")[n];
    }
  },
  computed: {
    currentView() {
      //scroll to page top before changing the view
      window.scrollTo({ top: 0, behavior: 'auto' });

      return routes["/" + this.currentPath.slice(1)] || Page404;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      // TODO pass a reference to the current menu item
      this.currentPath = window.location.hash;
    });
  },
  setup() {
    useSanityClient(
      {
        projectId: 'i32b0q2c',
        dataset: 'production',
        useCdn: true,
      },
      true // will now create a preview client for use elsewhere
    )
  },
};


</script>

<template>
  <!-- <AppHeader /> -->
  <!-- <RibbonNotice message="Preliminary Round Registrations are Open!!!"></RibbonNotice> -->
  <Navbar />
  <component :is="currentView" />

  <!-- <AppFooter /> -->
  <!-- <ToastButton href="https://forms.gle/FkeHg1AnZ1LpR32q7" message="Register For SOXVII"/> -->
  <Footer></Footer>
</template>

<style ></style>
<!-- 
<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";

import PageHome from "./pages/PageHome.vue";
import PageAbout from "./pages/PageAbout.vue";
import PageTechnicalTips from "./pages/PageTechnicalTips.vue";
import PageComingSoon from "./pages/PageComingSoon.vue";
import PageGallery from "./pages/PageGallery.vue";
import Page404 from "./pages/Page404.vue";
import PageChampionsStory from "./pages/PageChampionsStory.vue";
import PageBlogs from './pages/PageBlogs.vue';
import PageTest from './pages/PageTest.vue';
import SinglePost from "./components/SinglePost.vue";
import { useSanityClient } from 'vue-sanity'

const routes = {
  "/": PageHome,
  "/about": PageAbout,
  "/champions-story": PageChampionsStory,
  "/technical-tips": PageTechnicalTips,
  "/gallery": PageGallery,
  "/blogs": PageBlogs,
  "/test/:limit": PageTest,
  "/blog/:postId": SinglePost // Use route parameter for postId
};

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {
    currentView() {
      //scroll to page top before changing the view
      window.scrollTo({ top: 0, behavior: 'auto' });

      return routes["/" + this.$route.hash.slice(1)] || Page404;
    },
  },
  setup() {
    useSanityClient(
      {
        projectId: 'i32b0q2c',
        dataset: 'production',
        useCdn: true,
      },
      true // will now create a preview client for use elsewhere
    )
  },
};
</script>

<template>
  <AppHeader />

  <component :is="currentView" />

  <AppFooter />
</template>

<style></style> -->
