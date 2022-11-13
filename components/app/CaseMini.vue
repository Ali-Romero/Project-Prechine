<template>
  <div class="case-mini" :class="classes">
    <img :src="image" width="84" height="84" alt="product" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'case-mini--active': this.active,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.case-mini
  &--active
    position: relative
    &:before
      content: ""
      position: absolute
      width: 100%
      height: 100%
      border: 4px solid #FF840C
      top: 0
      left: 0
      border-radius: 14px
  ::v-deep
    img
      border-radius: 10px
      height: auto
      display: block
      width: 64px
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 45px
        border-radius: 10px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 64px
        border-radius: 12px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 84px
        border-radius: 14px
</style>
