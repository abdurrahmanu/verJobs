<template>
    <div>
        <h1 class="text-3xl font-bold underline">
            HOME PAGE
        </h1>
        <p class="space-x-5">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
            <nuxt-link to="/dashboard">Dashboard</nuxt-link>
            <nuxt-link to="/auth/">Profile</nuxt-link>
        </p>
    </div>
</template>

<script setup>
definePageMeta({ alias: '/' })
</script>
