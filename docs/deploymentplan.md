# GitHub Pages Deployment Plan

This document outlines the step-by-step process for deploying the SpeechOlympiadXVIII React (Vite) application to GitHub Pages. We will use **GitHub Actions** for deployment, which is the most modern and recommended way to deploy Vite applications to GitHub Pages. It automates the process so that every time you push code to the `main` branch, the website updates automatically.

## Phase 1: Codebase Configuration (Agent will do this)

Before we can deploy, we need to adjust a few files in the project so that it works correctly on GitHub Pages.

1. **Update `vite.config.ts`**:
   - By default, Vite assumes your project is hosted at the root of a domain (e.g., `https://example.com/`).
   - Since GitHub Pages hosts it at `https://SpeechOlympiadXV.github.io/SpeechOlympiadXVIII/`, we need to set the `base` property in the Vite config to `'/SpeechOlympiadXVIII/'`.

2. **Update React Router (`src/main.tsx`)**:
   - React Router also needs to know about this sub-path so it can handle navigation correctly.
   - We will update the `<BrowserRouter>` component to include `basename="/SpeechOlympiadXVIII"`.

3. **Create the GitHub Actions Workflow (`.github/workflows/deploy.yml`)**:
   - We will create a configuration file that tells GitHub's servers exactly how to install dependencies (`npm install`), build the production site (`npm run build`), and upload those built files to the GitHub Pages servers.

---

## Phase 2: Manual Setup on GitHub (User will do this)

Once the code changes are made and pushed to GitHub, you will need to configure your GitHub repository to enable the deployment. Here are the in-depth manual steps you need to follow:

### Step 1: Open Repository Settings
1. Open your web browser and go to your GitHub repository: `https://github.com/SpeechOlympiadXV/SpeechOlympiadXVIII`
2. Look at the tabs near the top (Code, Issues, Pull requests, etc.) and click on the **Settings** tab (the gear icon on the far right).

### Step 2: Navigate to Pages Settings
1. On the left-hand sidebar of the Settings page, scroll down to the "Code and automation" section.
2. Click on **Pages**.

### Step 3: Configure Build and Deployment
1. Under the "Build and deployment" section, look for the dropdown menu labeled **Source**.
2. Click the dropdown and change it from *Deploy from a branch* to **GitHub Actions**.
   - *(Note: This tells GitHub to wait for our automated workflow to build the site, rather than trying to build it using its old legacy system.)*

### Step 4: Add Environment Variables (If Applicable)
If your application relies on Supabase (which we see in your `.env` file), you don't necessarily need to add them to GitHub Secrets for GitHub Pages because Vite statically embeds `VITE_` variables into the public build. They will be pushed in your code (if `.env` is committed) or you can add them to the repository secrets if you want to inject them during the GitHub Action build.
- **Note**: Since `VITE_SUPABASE_PUBLISHABLE_KEY` is meant to be public, if your `.env` is currently ignored by Git, we will need to ensure the GitHub Action has access to these keys during the build process. We will add them to your repository secrets.
  1. Go to **Settings** > **Secrets and variables** > **Actions**.
  2. Click **New repository secret**.
  3. Name: `VITE_SUPABASE_URL`, Secret: `https://bvvwvikmddskwpgiosea.supabase.co`, click **Add secret**.
  4. Name: `VITE_SUPABASE_PUBLISHABLE_KEY`, Secret: `sb_publishable_ubCbbFFDLR1klJPfPlctJw__Oqhd1k-`, click **Add secret**.

### Step 5: Push and Monitor
1. Once we have committed and pushed the Phase 1 changes to your GitHub repository, the GitHub Action will automatically trigger.
2. Click on the **Actions** tab at the top of your GitHub repository.
3. You will see a workflow running (usually named "Deploy static content to Pages").
4. Once it turns green (Success), your website will be live!

---

## Next Steps

To begin, I (the Agent) can execute **Phase 1**. 

Let me know if you are ready for me to make the codebase changes (updating `vite.config.ts`, `main.tsx`, and adding the workflow file), or if you have any questions about the manual steps first!
