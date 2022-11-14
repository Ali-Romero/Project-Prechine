<template>
  <div class="circle-slider" :class="classes">
    <div class="circle-slider__slide circle-slider__slide--1">
      <div class="circle-slider__item">
        <ui-icon name="diff-search" class="circle-slider__icon" />
      </div>
    </div>
    <div class="circle-slider__slide circle-slider__slide--2">
      <div class="circle-slider__item">
        <ui-icon name="diff-box" class="circle-slider__icon" />
      </div>
    </div>
    <div class="circle-slider__slide circle-slider__slide--3">
      <div class="circle-slider__item">
        <ui-icon name="diff-calc" class="circle-slider__icon" />
      </div>
    </div>
    <div class="circle-slider__slide circle-slider__slide--4">
      <div class="circle-slider__item">
        <ui-icon name="diff-voice" class="circle-slider__icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slide: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    classes() {
      return [`circle-slider--current-${this.slide}`]
    },
  },
}
</script>

<style lang="sass" scoped>
.circle-slider
  position: relative
  width: 893px
  height: 893px
  border: 3px solid #FFFFFF
  border-radius: 100%
  transition: transform 0.2s

  &::before
    content: ''
    width: 621px
    height: 621px
    margin: auto
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    border: 3px solid #FFFFFF
    opacity: 0.5
    border-radius: 100%

  &--current-2
    transform: rotate(-35deg)

  &--current-3
    transform: rotate(-70deg)

  &--current-4
    transform: rotate(-105deg)

  &--current-1 &__slide--1 &__item &__icon
    transform: scale(1)

  &--current-1 &__slide--1 &__item
    width: 86px
    height: 86px
    background: #1776D4
    box-shadow: 0px 25px 29px rgba(23, 60, 98, 0.21)

  &--current-2 &__slide--2 &__item &__icon
    transform: scale(1)

  &--current-2 &__slide--2 &__item
    width: 86px
    height: 86px
    background: #1776D4
    box-shadow: 0px 25px 29px rgba(23, 60, 98, 0.21)

  &--current-3 &__slide--3 &__item &__icon
    transform: scale(1)

  &--current-3 &__slide--3 &__item
    width: 86px
    height: 86px
    background: #1776D4
    box-shadow: 0px 25px 29px rgba(23, 60, 98, 0.21)

  &--current-4 &__slide--4 &__item &__icon
    transform: scale(1)

  &--current-4 &__slide--4 &__item
    width: 86px
    height: 86px
    background: #1776D4
    box-shadow: 0px 25px 29px rgba(23, 60, 98, 0.21)

  &__slide
    width: 100%
    height: 100%
    position: absolute
    top: 0
    right: 0

    &--1
      transform: rotate(90deg)

    &--2
      transform: rotate(125deg)

    &--3
      transform: rotate(160deg)

    &--4
      transform: rotate(195deg)

  &__item
    display: flex
    align-items: center
    justify-content: center
    width: 20px
    height: 20px
    margin: auto
    position: absolute
    top: 0
    right: 0
    left: 0
    transform: translateY(-50%)
    border-radius: 100%
    background: #212121
    transition: all 0.2s

  &__icon
    transform: scale(0)
    transition: transform 0.2s
</style>
