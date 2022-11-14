<template>
  <div class="difference-title">
    <div class="difference-title__num">{{ titleDifferenceNum }}</div>
    <div class="difference-title__text">
      <slot name="difference-title-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titleDifferenceNum: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.difference-title
  position: relative
  display: inline-block
  z-index: 1
  padding-top: 100px

  &__num
    font-size: 160px
    line-height: 160px
    position: absolute
    color: white
    bottom: 10px
    text-align: center
    left: 0
    right: 0
    z-index: -1

  &__text
    font-size: 36px
    line-height: 50px
    font-family: 'Manrope-ExtraBold'
    text-transform: uppercase
    color: #212121
    text-align: center
</style>
