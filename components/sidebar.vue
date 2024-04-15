<template>
    <div>
        <nav>
            <ul class="sidebar divide-y flex gap-4">
                <li class="nav-close">
                    <nuxt-link to="" @click="open = false"><img src="/assets/images/close.svg"
                            alt="close sidebar" /></nuxt-link>
                </li>
                <li class="p-4"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="p-4"><nuxt-link to="/products">Explore</nuxt-link></li>
                <li class="p-4"><nuxt-link to="/about">About Us</nuxt-link></li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped></style>