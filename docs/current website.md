# Speech Olympiad XVIII - Current Project Structure & Analysis

This document provides a detailed overview of the current state of the `SpeechOlympiadXVIII` project (excluding the `Old` folder).

## 1. Tech Stack & Configuration
The project is a modern single-page application built using the following technologies:
- **Framework:** React (v19) configured with Vite for fast builds and hot module replacement.
- **Language:** TypeScript for static type checking.
- **Styling:** Tailwind CSS (v4) integrated via `@tailwindcss/vite`.
- **UI Components:** 
  - Radix UI primitives (`@radix-ui/react-*`) for accessible interactive elements.
  - Custom UI components (often inspired by `shadcn/ui`) built using `clsx` and `tailwind-merge`.
- **Icons:** `lucide-react`.
- **Forms & Validation:** `react-hook-form` and `zod`.
- **CMS/Data Fetching:** The app uses `next-sanity` to fetch content from Sanity CMS, configured in the main application file.

## 2. Directory Structure overview

### Root Level
The root contains standard configuration files:
- `package.json` & `package-lock.json`: Node dependencies and scripts (`dev`, `build`, `lint`, `preview`).
- `vite.config.ts`: Vite bundler configuration.
- `tsconfig.*.json`: TypeScript configurations.
- `eslint.config.js`: Linting setup.
- `index.html`: The HTML entry point for the Vite app.
- `components.json`: Configuration likely related to the `shadcn-ui` CLI setup.

### `src/` Directory
The `src/` folder holds the core application logic and UI.

#### Core Files
- **`main.tsx`**: Renders the React tree into the DOM.
- **`App.tsx`**: The main entry point for the UI. It implements a simple custom Hash-based router, mapping routes (e.g., `/`, `/about`, `/rules`, `/finalists`) to their respective page components. *Note: The file currently imports page components with names like `PageHome` and `PageAbout`, which might differ slightly from the actual filenames in the `pages/` directory.* It also initializes the Sanity CMS client.
- **`index.css`**: Global styles and Tailwind imports.

#### `src/pages/`
Contains the top-level route views of the application:
- `Home.tsx`: The landing page, orchestrating various sections like Hero, Features, Timeline, Testimonials, and Gallery.
- `About.tsx`: Information about the event/organization.
- `ChampionsStory.tsx`: Dedicated page for past champions.
- `TechTips.tsx`: Technical tips section.
- `Blog.tsx`: Displays blog posts.
- `Page404.tsx`: Fallback for undefined routes.

#### `src/components/`
Contains reusable sections and larger UI blocks:
- **Layout & Navigation:** `navbar.tsx` (There might be a separate `Navigation` and `Footer` as referenced in `App.tsx`).
- **Home Page Sections:** `Hero.tsx`, `Feature.tsx`, `Partners.tsx`, `Timeline.tsx`, `Testimonial.tsx`, `Gallery.tsx`, `Doodle.tsx`.
- **Other utilities:** `AppCaraousal.tsx`, `SOLogo.tsx`.

#### `src/components/ui/`
Contains the atomic, low-level UI components (primitive building blocks):
- Elements like `button.tsx`, `input.tsx`, `card.tsx`, `dialog.tsx`, `accordion.tsx`, `form.tsx`, `tabs.tsx`, etc.
- These form the foundational design system of the application.

#### `src/lib/`
- **`utils.ts`**: Contains generic utility functions, commonly a `cn()` function for merging Tailwind CSS classes efficiently.

#### `src/assets/`
- Stores static assets like images used directly within the React code (e.g., gallery images, sponsor logos, homepage graphics).

## 3. Notable Observations
- **Routing:** The application uses a custom, lightweight hash router defined in `App.tsx` rather than a standard library like `react-router-dom`.
- **Potential File Naming Mismatch:** There appear to be minor inconsistencies between the exported component names/imported names in `App.tsx` (like `PageHome`) and the actual filenames in `src/pages` (like `Home.tsx`), which might be leftover from recent refactoring.
- **Content Management:** There is an integration with Sanity CMS built-in to the `App.tsx` file indicating that some of the site's content is managed dynamically.
