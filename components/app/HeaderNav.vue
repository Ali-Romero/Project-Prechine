<template>
  <nav class="header-nav">
    <ul class="header-nav__list">
      <li class="header-nav__item active">
        <a href="#">Формат сотрудничества</a>
      </li>
      <li class="header-nav__item">
        <a href="#">Примеры товаров</a>
      </li>
      <li class="header-nav__item">
        <a href="#">Доходы партнёров</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="sass" scoped>
.header-nav
  &__list
    display: flex
  &__item
    margin-right: 24px
    font-size: 12px
    line-height: 16px
    text-transform: uppercase
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 30px
      font-size: 14px
      line-height: 17px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-right: 40px
      font-size: 16px
      line-height: 19px
    &:last-child
      margin-right: 0
    &.active
        a
          position: relative
          color: #FF840C
          &::before
            content: ""
            position: absolute
            bottom: 0
            height: 1px
            width: 100%
            background-color: #FF840C
            @media (min-width: map-get($breakpoints, 'lg'))
              height: 2px
</style>
