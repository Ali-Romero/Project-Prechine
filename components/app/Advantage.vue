<template>
  <div class="advantage" :class="classes">
    <div class="advantage__image">
      <slot name="image">
        <ui-image
          :src="img"
          alt="image"
          width="740"
          height="460"
          sizes="lg:525, xxxl:740"
        ></ui-image>
      </slot>
    </div>
    <div class="advantage__info">
      <div class="advantage__icon">
        <slot name="icon" />
      </div>
      <div class="advantage__title">
        <slot name="title" />
      </div>
      <div class="advantage__description">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    second: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'advantage--secondary': this.second
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.advantage
  @media (min-width: map-get($breakpoints, 'sm'))
    display: flex
    align-items: center
    width: 690px
  @media (min-width: map-get($breakpoints, 'lg'))
    width: 913px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    width: 1183px
  &--secondary
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 1268px
    .advantage__info
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 438px

  &__image
    margin-bottom: 22px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
      margin-right: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 50px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-right: 70px
    ::v-deep
      img
        width: 300px
        height: auto
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 370px
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 525px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 740px

  &__info
    max-width: 290px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 338px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 373px

  &__icon
    margin-bottom: 4px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 12px
    svg
      width: 36px
      height: 36px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 52px
        height: 52px

  &__title
    font-size: 20px
    line-height: 28px
    margin-bottom: 16px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 21px
      line-height: 28px
      margin-bottom: 15px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 26px
      line-height: 32px
      margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 30px
      line-height: 42px
      margin-bottom: 26px

  &__description
    font-size: 14px
    line-height: 21px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 14px
      line-height: 18px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 16px
      line-height: 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 18px
      line-height: 27px
    ul
      li
        position: relative
        padding: 0 0 0 20px
        margin-bottom: 10
        @media (min-width: map-get($breakpoints, 'lg'))
          padding: 0 0 0 24px
          margin-bottom: 16px
        &:last-child
          margin-bottom: 0
        &:before
          content: ""
          position: absolute
          left: 0
          top: 9px
          width: 8px
          height: 8px
          border-radius: 100%
          background-color: #212121
          @media (min-width: map-get($breakpoints, 'lg'))
            width: 10px
            height: 10px
</style>
