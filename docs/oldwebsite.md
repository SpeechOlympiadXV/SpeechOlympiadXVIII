# Speech Olympiad - Old Website Analysis

This document provides a detailed overview of the legacy codebase located in the `Old/` directory of the `SpeechOlympiadXVIII` project. It appears to be the repository for a previous iteration of the event (likely Speech Olympiad XV based on the `package.json` project name).

## 1. Tech Stack & Configuration
The old website was built using a completely different framework than the current website:
- **Framework:** Vue 3 (using Single File Components `.vue`), configured with Vite.
- **Language:** JavaScript (unlike the new project which uses TypeScript).
- **Styling:** Tailwind CSS (v3) with Autoprefixer and PostCSS. It also utilized `vuetify` for some UI components.
- **Animations:** Used `@vueuse/motion` and `aos` (Animate On Scroll) for scroll-based and element animations.
- **CMS/Data Fetching:** It integrated with Sanity CMS using `@sanity/client` and `vue-sanity`.
- **Hosting/Deployment:** The presence of `deploy.sh` and the `CNAME` file indicates it was deployed to GitHub Pages (to a custom domain).

## 2. Directory Structure overview

### Root Level
- `package.json`: Contains project metadata (named `speecholympiadxv.github.io`), Vue, Vuetify, Sanity, and Firebase dependencies.
- `vite.config.mjs`: Vite bundler configuration for Vue and JSX plugins.
- `tailwind.config.js` & `postcss.config.js`: Tailwind CSS configurations.
- `index.html`: The HTML entry point.
- `deploy.sh`: A shell script for building and deploying the site.

### `src/` Directory
The `src/` folder holds the Vue application code.

#### Core Files
- **`main.js`**: The Vue application initialization file.
- **`App.vue`**: The root Vue component.
- **`index.css`**: Global CSS imports for Tailwind.
- **`aos.js` & `scrollA.js`**: Custom scripts/configurations for scroll animations.

#### `src/pages/`
This directory contains the main views for the application, representing a richer set of pages than what currently exists in the new React app:
- **Core Pages:** `PageHome.vue`, `PageAbout.vue`, `PageRules.vue`, `PageGallery.vue`.
- **Event Specific:** `PageChampionsStory.vue`, `PageTechTips.vue`, `PageTechnicalTips.vue`.
- **Competition Stages:** `PageSemiFinalists.vue`, `PageFinalists.vue`.
- **Interactivity/Forms:** `PageForm.vue`, `PageFormNew.vue`, `PageRegister.vue`, `PageVote.vue`.
- **Content:** `PageBlogs.vue`, `PageBlog2.vue`.
- **Admin/Misc:** `PageAdmin.vue`, `PageTest.vue`, `Page404.vue`, `PageComingSoon.vue`.

#### `src/components/`
A large collection of Vue components used to build the pages:
- **Layout:** `Navbar.vue`, `Footer.vue`, `AppHeader.vue`, `AppFooter.vue`.
- **UI Elements:** `Hero.vue`, `Feature.vue`, `AppCarousel.vue`, `AppTestimonialCard.vue`, `ToastButton.vue`, `RibbonNotice.vue`.
- **Event Features:** `CompetitionTimeline.vue`, `timeline2.vue`, `countdown.vue`, `partners.vue`, `RegisterSection.vue`.
- **Graphics/SVGs:** `Doodle.vue`, `LaurelWreath.vue`, `WingedAward.vue`, `GavelLogo.vue`, `SOLogo.vue`.
- **Content Blocks:** `BlogIndex.vue`, `SinglePost.vue`, `ChampStory.vue`, `TechnicalTips.vue`.

#### Other Directories
- `src/assets/`: Static media and images.
- `src/ChampStory/` & `src/TechTips/`: Likely contained specific sub-components or data for those respective sections.

## 3. Key Takeaways and Comparison
- **Migration:** The project has undergone a significant migration from Vue 3 (JavaScript) to React 19 (TypeScript).
- **Features:** The old website had comprehensive features for different competition stages (semi-finalists, finalists, voting) and complex forms. These might still need to be ported over to the new React website if they are required for the upcoming event.
- **Styling Approach:** The old project mixed Tailwind CSS with Vuetify components, whereas the new project relies purely on Tailwind CSS combined with Radix UI (a headless UI library).
- **Animations:** The legacy site relied heavily on AOS (Animate on Scroll) which might be an area to look into for the new React site to maintain a dynamic feel.
