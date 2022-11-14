<template>
  <div class="difference-card">
    <div class="difference-card__box difference-card__box--1">
      <div class="difference-card__inner">
        <div class="difference-card__top">
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
        </div>
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
        <div class="difference-card__top">
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
  max-width: 300px
  background-color: white
  border-radius: 30px 24px 24px 30px
  @media (min-width: map-get($breakpoints, 'md'))
    max-width: 507px
    display: flex
  @media (min-width: map-get($breakpoints, 'lg'))
    max-width: 594px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    max-width: 740px
  &__box
    @media (min-width: map-get($breakpoints, 'md'))
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
    padding: 24px 26px
    @media (min-width: map-get($breakpoints, 'md'))
      padding: 20px 16px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 30px 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 50px 40px
  &__top
    display: flex
    align-items: center
    margin-bottom: 10px
    @media (min-width: map-get($breakpoints, 'md'))
      margin-bottom: 0
      display: block
  &__icon
    display: flex
    justify-content: center
    margin-right: 16px
    @media (min-width: map-get($breakpoints, 'md'))
      margin-bottom: 18px
    img
      width: auto
      height: 47px
      @media (min-width: map-get($breakpoints, 'md'))
        height: 54px
      @media (min-width: map-get($breakpoints, 'lg'))
        height: 64px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        height: 80px
  &__title
    font-size: 16px
    line-height: 21px
    text-align: center
    text-transform: uppercase
    font-family: 'Manrope-SemiBold'
    display: flex
    align-items: center
    @media (min-width: map-get($breakpoints, 'md'))
      height: 41px
      margin-bottom: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 16px
      font-size: 19px
      line-height: 26px
      height: 41px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 20px
      font-size: 22px
      line-height: 33px
      height: 66px

  &__description
    font-size: 14px
    line-height: 21px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 16px
      line-height: 24px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 18px
      line-height: 27px

  &__description-helper
    background-color: #1776D4
    padding: 30px 40px
    border-radius: 0px 0px 24px 24px
    font-size: 16px
    line-height: 24px
</style>
