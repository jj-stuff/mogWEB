<template>
  <div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-1">
      <div
        v-for="item in products"
        :key="item.id"
        style="border: 2px dotted purple"
      >
        <ProductCard :product="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
// get products from a sample api
const { data: products } = await useFetch('https://fakestoreapi.com/products');

useHead({
  title: 'MOG | Explore',
  meta: [{ name: 'description', content: 'MOG merch' }],
});
</script>

<style lang="scss" scoped></style>
