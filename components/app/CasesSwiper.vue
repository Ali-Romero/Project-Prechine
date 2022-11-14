<template>
  <ui-swiper class="cases-swiper" :params="params">
    <ui-swiper-wrapper>
      <ui-swiper-slide v-for="product in products" :key="product.key">
        <app-case-mini :image="product.thumbnail"></app-case-mini>
      </ui-swiper-slide>
    </ui-swiper-wrapper>
  </ui-swiper>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      params: {
        slidesPerView: 4,
        freeMode: true,
        speed: 500,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.cases-swiper
  &.swiper
    overflow: unset
</style>
