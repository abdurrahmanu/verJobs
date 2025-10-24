<template>
  <div class="flex flex-col max-h-screen h-screen bg-green-300">
    <slot name="header" />
    <main>
        <slot name="main" />
    </main>
  </div>
</template>

<script setup>
// const props = defineProps({
//     background: {
//         type: String,
//         default: 'bg-white',
//     },
//     svgs: {
//         type: Array,
//         default: [],
//     },
//     images: {
//         type: Array,
//         default: [],
//     },
// })
const animateDir = [1,2,3,4]
</script>

<style scoped>
main :deep(*) {
    display: flex;
    flex: 1 1 0%;
    background: pink;
}

main {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex: 1 1 0%;
}
</style>
