<template>
  <div class="difference-card">
    <div class="difference-card__box difference-card__box--1">
      <div class="difference-card__inner">
        <div class="difference-card__icon">
          <img
            src="@/assets/images/difference-card-icon-1.svg"
            width="95"
            height="80"
            alt="logo"
            loading="lazy"
          />
        </div>
        <div class="difference-card__title">Франшиза PriChina</div>
        <div class="difference-card__description">{{ positiveText }}</div>
      </div>
      <div
        v-if="$scopedSlots.differenceCard"
        class="difference-card__description-helper"
      >
        <slot name="difference-card"></slot>
      </div>
    </div>
    <div class="difference-card__box difference-card__box--2">
      <div class="difference-card__inner">
        <div class="difference-card__icon">
          <img
            src="@/assets/images/difference-card-icon-2.svg"
            width="80"
            height="80"
            alt="logo"
            loading="lazy"
          />
        </div>
        <div class="difference-card__title">
          Обучение бизнесу <br />
          на маркетплейсах
        </div>
        <div class="difference-card__description">{{ negativeText }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    positiveText: {
      type: String,
      default: ''
    },
    negativeText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.difference-card
  display: flex
  max-width: 740px
  background-color: white
  border-radius: 30px 24px 24px 30px

  &__box
    max-width: 370px
    width: 100%
    &--1
      background-color: #212121
      border-radius: 24px
      color: white
    &--2
      color: #212121
      .difference-card__description
        color: #7D7D7D

  &__inner
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center
    padding: 50px 40px

  &__icon
    margin-bottom: 18px

  &__title
    margin-bottom: 20px
    font-size: 22px
    line-height: 33px
    text-align: center
    text-transform: uppercase
    font-family: 'Manrope-SemiBold'
    height: 66px
    display: flex
    align-items: center

  &__description
    font-size: 18px
    line-height: 27px

  &__description-helper
    background-color: #1776D4
    padding: 30px 40px
    border-radius: 0px 0px 24px 24px
    font-size: 16px
    line-height: 24px
</style>
