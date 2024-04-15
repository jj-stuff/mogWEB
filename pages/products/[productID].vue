<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { productID } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + productID;

const { data: product } = await useFetch(uri);

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product Not Found' });
}
</script>

<style lang="scss" scoped></style>
