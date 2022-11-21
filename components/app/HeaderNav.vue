<template>
  <nav class="header-nav">
    <ul class="header-nav__list">
      <li class="header-nav__item">
        <a
          v-scroll-to="{
            el: '#difference-section',
            duration: 800,
            easing: 'linear',
            force: false,
            offset: sectionOffsetMain - -3400,
          }"
          href="#"
          class="header-nav__link-1"
          >Формат сотрудничества</a
        >
        <a
          v-scroll-to="{
            el: '#difference-section',
            duration: 800,
            easing: 'linear',
            force: false,
            offset: sectionOffsetMain - -600,
          }"
          href="#"
          class="header-nav__link-2"
          >Формат сотрудничества</a
        >
      </li>
      <li class="header-nav__item">
        <a
          v-scroll-to="{
            el: '#cases-section',
            duration: 800,
            easing: 'linear',
            force: false,
            offset: sectionOffsetAbout - 20,
          }"
          href="#"
        >
          Товары и доходы</a
        >
      </li>
      <li class="header-nav__item">
        <a
          v-scroll-to="{
            force: false,
            el: '#invite-section',
            duration: 800,
            easing: 'linear',
            offset: sectionOffsetInvite - 20,
          }"
          href="#"
        >
          Экскурсия по офису</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      sectionOffsetMain: '',
      sectionOffsetAbout: '',
      sectionOffsetInvite: '',
    }
  },
  mounted() {
    this.sectionOffsetMain = document.getElementById(
      'main-section'
    ).offsetHeight
    this.sectionOffsetAbout = document.getElementById(
      'about-section'
    ).offsetHeight
    this.sectionOffsetInvite = document.getElementById(
      'invite-section'
    ).offsetHeight
  },
}
</script>

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
      -webkit-touch-callout: none
      -webkit-user-select: none
      -khtml-user-select: none
      -moz-user-select: none
      -ms-user-select: none
      user-select: none
  &__link-1
    @media (min-width: map-get($breakpoints, 'md'))
      display: none
  &__link-2
    @media (min-width: map-get($breakpoints, 'sm'))
      display: none
    @media (min-width: map-get($breakpoints, 'md'))
      display: block
    &:last-child
      margin-right: 0
    &:hover
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
