<template>
    <BaseFlexFill>
        <template #header>
            <nav class="flex justify-center">
                <nuxt-link class="py-5 font-bold hover:bg-slate-200 px-5" v-for="route in routes" :key="route.path" :to="route.path">
                    {{ route.name.toUpperCase() }}
                </nuxt-link>
            </nav>
        </template>

        <template #main>
            <slot />
        </template>
    </BaseFlexFill>
</template>

<script setup>
const routes = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Account', path: '/auth' },
]
</script>
