<template>
  <ui-swiper class="income-swiper-mobile" :params="params">
    <ui-swiper-wrapper>
      <ui-swiper-slide>
        <div class="income-swiper-mobile__list">
          <div class="income-swiper-mobile__item">
            <ui-card value="3 типа" name="товаров для закупки"></ui-card>
          </div>
          <div class="income-swiper-mobile__item">
            <ui-card value="200 000 ₽" name="вложений в товар"></ui-card>
          </div>
          <div class="income-swiper-mobile__item">
            <ui-card value="670 000 ₽" name="выручки в месяц"></ui-card>
          </div>
        </div>
      </ui-swiper-slide>
      <ui-swiper-slide>
        <div class="income-swiper-mobile__list">
          <div class="income-swiper-mobile__item">
            <ui-card value="700" name="продаж в месяц"></ui-card>
          </div>
          <div class="income-swiper-mobile__item">
            <ui-card value="40%" name="рентабельности"></ui-card>
          </div>
          <div class="income-swiper-mobile__item">
            <ui-card value="1 месяц" name="до выхода на прибыль"></ui-card>
          </div>
        </div>
      </ui-swiper-slide>
      <ui-swiper-slide>
        <div class="income-swiper-mobile__list">
          <div class="income-swiper-mobile__item">
            <ui-card value="330%" name="средняя наценка"></ui-card>
          </div>
          <div class="income-swiper-mobile__item">
            <ui-card value="5" name="месяцев окупаемости"></ui-card>
          </div>
        </div>
      </ui-swiper-slide>
    </ui-swiper-wrapper>
  </ui-swiper>

</template>


<script>
export default {
  data() {
    return {
      params: {
        slidesPerView: 1,
        spaceBetween: 10,
        // freeMode: true,
        speed: 500,
        centeredSlides: true,
        centeredSlidesBounds: true
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.income-swiper-mobile
  &.swiper
    overflow: unset
    max-width: 205px
  .swiper-slide
    .income-swiper-mobile__item
      opacity: 0.2
      transition: 0.4s

    &.swiper-slide-active
      .income-swiper-mobile__item
        opacity: 1

  &__list
    max-width: 205px
  &__item
    margin-bottom: 10px
    &:last-child
      margin-bottom: 0
</style>