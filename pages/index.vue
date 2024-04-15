<template>
  <div class="p-12">
    <div class="new-in prevent-select">
      <h1>New In</h1>
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="'auto'"
        :grab-cursor="true"
        :spaceBetween="30"
        :centeredSlides="true"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="photo in photos">
          <img
            :src="photo"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
const photos = [
  '/img/sample_1.png',
  '/img/sample_2.png',
  '/img/sample_3.png',
  '/img/sample_4.png',
  '/img/sample_5.png',
];
</script>

<style scoped>
.prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

h1 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 3rem;
  letter-spacing: 1rem;
}

.swiper {
  height: 600px;
  border: solid 3px grey;
  background-color: rgb(255, 227, 183);
}

.swiper-slide {
  width: 800px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
}

:global(.swiper-pagination-bullet-active) {
  background: rgb(255, 144, 47);
}
</style>
