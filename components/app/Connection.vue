<template>
  <div class="connection">
    <div class="connection__icon">
      <ui-icon name="connection-phone" />
    </div>
    <div class="connection__container">
      <div class="connection__num">
        <a href="tel:88003330168">8 (800) 333-01-68</a>
      </div>
      <div class="connection__description">
        <a href="#">Бесплатный звонок</a>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.connection
  display: flex
  color: #212121
  &__container
    //
  &__icon
    width: 26px
    height: 26px
    margin-right: 8px
    border-radius: 100%
    background-color: white
    display: flex
    justify-content: center
    align-items: center
    @media (min-width: map-get($breakpoints, 'lg'))
      width: 33px
      height: 33px
      margin-right: 11px
    svg
      display: block
      width: 14px
      height: 14px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 19px
        height: 19px
  &__num
    font-family: 'Manrope-Medium'
    font-size: 16px
    line-height: 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 20px
      line-height: 27px

  &__description
    font-size: 13px
    line-height: 17px
    display: flex
    justify-content: center
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 15px
      line-height: 20px
</style>
