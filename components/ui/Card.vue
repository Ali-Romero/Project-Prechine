<template>
  <div class="ui-card" :class="classes">
    <div class="ui-card__dot"></div>
    <div class="ui-card__container">
      <div class="ui-card__value">{{ value }}</div>
      <div class="ui-card__name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    total: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'ui-card--total': this.total
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.ui-card
  border: 1px solid #7D7D7D
  border-radius: 16px
  padding: 28px
  width: 205px
  height: 142px
  @media (min-width: map-get($breakpoints, 'lg'))
    border-radius: 24px
    padding: 30x
    width: 280px
    height: 186px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    padding: 50px
    width: 364px
    height: 253px
  &--total
    background: #1776D4
    border: none
    width: 252px
    height: 126px
    display: flex
    @media (min-width: map-get($breakpoints, 'lg'))
      display: block
      width: 312px
      height: 215px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      width: 397px
      height: 281px
    .ui-card__dot
      width: 20px
      height: 20px
      border: 5px solid #FF840C
      background-color: unset
      margin-right: 21px
      margin-top: 7px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 24px
        height: 24px
        border: 6px solid #FF840C
        margin-top: 0
        margin-right: 0
  &__dot
    width: 8px
    height: 8px
    margin-bottom: 11px
    border-radius: 100%
    background-color: #FF840C
    @media (min-width: map-get($breakpoints, 'lg'))
      width: 10px
      height: 10px
  &__value
    font-family: 'Manrope-ExtraBold'
    text-transform: uppercase
    font-size: 26px
    line-height: 36px
    margin-bottom: 6px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 40px
      line-height: 50px
      margin-bottom: 16px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 50px
      line-height: 70px
      margin-bottom: 20px
</style>
