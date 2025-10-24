// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/test-utils",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/eslint",
    "@nuxt/content",
    "@pinia/nuxt",
  ],
  pinia: {
    storesDirs: ["stores"],
  },
});
