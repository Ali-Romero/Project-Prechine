<template>
  <div class="ui-nav-button" :class="classes" v-on="$listeners">
    <ui-icon name="icon-arrow"></ui-icon>
  </div>
</template>

<script>
export default {
  props: {
    next: {
      type: Boolean,
      default: false
    },
    prev: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'ui-nav-button--next': this.next,
        'ui-nav-button--prev': this.prev
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.ui-nav-button
  border: 1px solid #212121
  border-radius: 100%
  width: 48px
  height: 48px
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  transition: 0.2s
  -webkit-tap-highlight-color: transparent
  @media (min-width: map-get($breakpoints, 'sm'))
    width: 36px
    height: 36px
  @media (min-width: map-get($breakpoints, 'lg'))
    width: 50px
    height: 50px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    width: 64px
    height: 64px
  &:hover
    background-color: #212121
    svg
      color: white

  &--next
    transform: rotate(180deg)
  svg
    color: #212121
    transition: 0.2s
    width: 16px
    height: 11px
    @media (min-width: map-get($breakpoints, 'lg'))
      width: 21px
      height: 14px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      width: 23px
      height: 16px
</style>
