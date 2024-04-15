<template>
  <div class="card grid lg:grid-cols-2 text-center p-12">
    <div class="left-img m-auto">
      <img
        :src="product.image"
        alt="product image"
        class="thumb"
      />
    </div>
    <div class="right-details p-12 divide-y grid">
      <h1 class="font-bold">{{ product.title }}</h1>
      <div class="small-details font-light p-4 gap-6 grid">
        <p>{{ product.description }}</p>
        <p>Reference: {{ product.id }}</p>
      </div>
      <p class="p-12">Price - ฿{{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style scoped>
.thumb {
  max-width: 40vw;
}
</style>
