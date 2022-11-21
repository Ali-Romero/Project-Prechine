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
      default: '',
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
  padding-top: 48px
  @media (min-width: map-get($breakpoints, 'md'))
    padding-top: 0

  &__num
    font-family: 'Manrope-Light'
    font-size: 70px
    line-height: 70px
    position: absolute
    color: white
    top: 2px
    text-align: center
    left: 0
    right: 0
    z-index: -1
    @media (min-width: map-get($breakpoints, 'md'))
      font-size: 100px
      line-height: 100px
      top: -64px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 120px
      line-height: 120px
      top: -82px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 150px
      line-height: 150px
      top: -105px
      @media (max-height: 800px)
        font-size: 130px
        line-height: 130px
        top: -90px

  &__text
    font-size: 18px
    line-height: 25px
    font-family: 'Manrope-ExtraBold'
    text-transform: uppercase
    color: #212121
    text-align: center
    max-width: 278px
    @media (min-width: map-get($breakpoints, 'md'))
      max-width: 100%
      font-size: 23px
      line-height: 28px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 24px
      line-height: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 34px
      line-height: 48px
      @media (max-height: 800px)
        font-size: 28px
        line-height: 34px
        width: 100%
        max-width: 400px
</style>
