<template>
  <div class="difference-title">
    <div class="difference-title__num">{{ titleDifferenceNum }}</div>
    <div class="difference-title__text">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleDifferenceNum: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
.difference-title
  position: relative
  display: inline-block
  z-index: 1
  padding-top: 24px
  @media (min-width: map-get($breakpoints, 'md'))
    padding-top: 50px
  @media (min-width: map-get($breakpoints, 'lg'))
    padding-top: 62px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    padding-top: 100px

  &__num
    font-family: 'Manrope-Light'
    font-size: 70px
    line-height: 70px
    position: absolute
    color: white
    bottom: -6px
    text-align: center
    left: 0
    right: 0
    z-index: -1
    @media (min-width: map-get($breakpoints, 'md'))
      font-size: 100px
      line-height: 100px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 120px
      line-height: 120px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 160px
      line-height: 160px
      bottom: 10px

  &__text
    font-size: 18px
    line-height: 25px
    font-family: 'Manrope-ExtraBold'
    text-transform: uppercase
    color: #212121
    text-align: center
    @media (min-width: map-get($breakpoints, 'md'))
      font-size: 24px
      line-height: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 28px
      line-height: 36px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 36px
      line-height: 50px
</style>
