<template>
  <header class="header">
    <ui-wrapper>
      <div class="header__inner">
        <div class="header__container">
          <div class="header__logo">
            <img
              v-if="page === 'index'"
              src="@/assets/images/logo-main.svg"
              width="111"
              height="90"
              alt="logo"
              loading="lazy"
            />
            <router-link v-if="page === 'thanks'" to="/">
              <img
                src="@/assets/images/logo-main.svg"
                width="111"
                height="90"
                alt="logo"
                loading="lazy"
              />
            </router-link>
          </div>
          <div v-if="page === 'index'" class="d-none d-sm-block header__nav">
            <app-header-nav></app-header-nav>
          </div>
        </div>
        <div class="d-sm-none header__social">
          <span>Напишите нам</span>
          <ui-social></ui-social>
        </div>
        <div class="header__connection">
          <app-connection title="Бесплатный звонок (хедер)" header />
        </div>
      </div>
    </ui-wrapper>
  </header>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$route.name
    },
  },
}
</script>

<style lang="sass" scoped>
.header
  &__inner
    padding: 10px 0
    display: flex
    justify-content: space-between
    align-items: center
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 18px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 20px 0

  &__social
    font-size: 12px
    line-height: 18px
    span
      display: block
      margin-bottom: 4px

  &__container
    display: flex
    align-items: center

  &__logo
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-right: 22px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 64px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-right: 84px
    img
      width: 58px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 70px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 90px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 111px
</style>
