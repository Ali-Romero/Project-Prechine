<template>
  <header class="header">
    <ui-wrapper>
      <div class="header__inner">
        <div class="header__container">
          <div class="header__logo">
            <img
              src="@/assets/images/logo-main.svg"
              width="111"
              height="90"
              alt="logo"
              loading="lazy"
            />
          </div>
          <div class="header__nav">
            <app-header-nav></app-header-nav>
          </div>
        </div>
        <div class="header__connection">
          <app-connection></app-connection>
        </div>
      </div>
    </ui-wrapper>
  </header>
</template>

<style lang="sass" scoped>
.header
  &__inner
    padding: 18px 0
    display: flex
    justify-content: space-between
    align-items: center
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 20px 0

  &__container
    display: flex
    align-items: center
  &__logo
    margin-right: 22px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 64px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-right: 84px
    img
      width: 70px
      height: auto
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 90px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 111px
</style>
