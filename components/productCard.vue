<template>
  <nuxt-link :to="`/products/${product.id}`">
    <div class="card text-center">
      <div class="img-container py-12">
        <img
          :src="product.image"
          alt="product thumbnail"
          class="thumb"
        />
      </div>
      <div class="info grid grid-cols-3 p-4">
        <p class="product-name col-span-2 text-left">{{ product.title }}</p>
        <p class="product-price col-span-1 text-right">฿{{ product.price }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
const { product } = defineProps(['product']);
</script>

<style scoped>
.card {
  display: flex;
  align-content: center;
  flex-direction: column;
}
.thumb {
  max-height: 260px;
  max-width: 70%;
  margin: 0 auto;
}
.img-container {
  background-color: gainsboro;
}
</style>
