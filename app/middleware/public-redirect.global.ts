export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith("/public/")) {
    const newPath = to.path.replace(/^\/public/, "");
    return navigateTo(newPath);
  }
});
