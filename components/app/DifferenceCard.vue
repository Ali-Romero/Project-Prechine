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
        <transition name="fade" mode="out-in">
          <div :key="blackText" class="difference-card__text-box">
            <div class="difference-card__description">{{ blackText }}</div>
            <div v-if="blueText" class="difference-card__description-helper">
              {{ blueText }}
            </div>
          </div>
        </transition>
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
            Обучение бизнесу на маркетплейсах
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <div :key="whiteText" class="difference-card__text-box">
            <div class="difference-card__description">{{ whiteText }}</div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blackText: {
      type: String,
      default: '',
    },
    whiteText: {
      type: String,
      default: '',
    },
    blueText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
.difference-card
  background-color: white
  border-radius: 30px 24px 24px 30px
  @media (min-width: map-get($breakpoints, 'md'))
    display: flex

  &__box
    @media (min-width: map-get($breakpoints, 'md'))
      max-width: 370px
      width: 100%
    &--1
      background-color: #33A453
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
    padding-top: 24px
    @media (min-width: map-get($breakpoints, 'md'))
      padding-top: 20px
      margin-right: 0
      margin-bottom: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 12px
      padding-top: 30px
      @media (max-height: 800px)
        padding-top: 16px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding-top: 30px
      @media (max-height: 800px)
        padding-top: 16px
    img
      width: auto
      height: 47px
      @media (min-width: map-get($breakpoints, 'md'))
        height: 54px
      @media (min-width: map-get($breakpoints, 'lg'))
        height: 64px
        @media (max-height: 800px)
          height: 54px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        height: 80px
        @media (max-height: 800px)
          height: 68px

  &__title
    font-size: 16px
    line-height: 21px
    text-transform: uppercase
    font-family: 'Manrope-SemiBold'
    display: flex
    align-items: center
    max-width: 167px
    padding-top: 24px
    @media (min-width: map-get($breakpoints, 'md'))
      padding-top: 0
      text-align: center
      height: 41px
      margin-bottom: 12px
      max-width: 176px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 16px
      font-size: 19px
      line-height: 26px
      height: 41px
      max-width: 208px
      @media (max-height: 800px)
        margin-bottom: 10px
        font-size: 16px
        line-height: 20px
        max-width: 180px
        height: 38px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 243px
      margin-bottom: 14px
      font-size: 22px
      line-height: 30px
      height: 58px
      @media (max-height: 800px)
        font-size: 19px
        line-height: 26px
        max-width: 200px
        height: 41px

  &__text-box
    width: 100%

  &__description
    font-size: 14px
    line-height: 21px
    margin: 0 auto
    padding: 0 26px 20px 26px
    @media (min-width: map-get($breakpoints, 'md'))
      padding: 0 16px 14px 16px
      font-size: 14px
      line-height: 18px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 16px
      line-height: 24px
      padding: 0 20px 30px 20px
      @media (max-height: 800px)
        font-size: 14px
        line-height: 18px
        padding: 0 20px 16px 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 18px
      line-height: 26px
      padding: 0 40px 30px 40px
      @media (max-height: 800px)
        font-size: 15px
        line-height: 19px
        padding: 0 30px 24px 30px

  &__description-helper
    background-color: #1776D4
    border-radius: 0px 0px 24px 24px
    padding: 20px 26px
    font-size: 14px
    line-height: 20px
    @media (min-width: map-get($breakpoints, 'md'))
      padding: 12px 11px 12px 16px
      font-size: 13px
      line-height: 15px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 12px 11px 16px 20px
      font-size: 15px
      line-height: 20px
      @media (max-height: 800px)
        padding: 10px 11px 12px 20px
        font-size: 15px
        line-height: 19px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 14px 40px
      font-size: 16px
      line-height: 20px
      @media (max-height: 800px)
        font-size: 14px
        line-height: 20px
        padding: 14px 30px
</style>
