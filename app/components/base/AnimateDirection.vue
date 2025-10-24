<template>
    <div @click="changeDir" class="">
        <img :src="images[dir]" class="h-32 w-32" alt="">
    </div>
</template>

<script setup lang="ts">
const images = [
    '/arrow-right.svg',
    '/arrow-left.svg',
    '/arrow-top.svg',
    '/arrow-bottom.svg',
]

const dir = ref(0)
const changeDir = () => dir.value = Math.floor(Math.random() * images.length)
</script>
