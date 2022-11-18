<template>
  <section id="main-section" ref="section" class="main-section">
    <div ref="overlay" class="main-section__overlay" />
    <app-header></app-header>
    <ui-wrapper>
      <div class="main-section__inner">
        <h1 class="main-section__title title">
          Франшиза
          <br />
          онлайн бизнеса:
          <br class="d-none d-sm-inline" />
          <span class="text-border"> продавай</span> товары
          <br class="d-none d-sm-inline" />
          на
          <br class="d-sm-none" />
          маркетплейсах
          <br class="d-none d-sm-inline" />
          <span class="text-border text-border--mb">и путешествуй</span>
          <span class="main-section__title-img">
            <ui-image src="multi-logo.png" width="161" height="60" alt="logo" />
          </span>
        </h1>
        <div class="main-section__description d-none d-sm-block">
          Пользуйся фулфилмент сервисом франшизы и зарабатывай
          <span> до 270 000 рублей прибыли в месяц, </span>
          которых хватит
          <br class="d-none d-sm-inline" />
          на поездки или проживание в курортных странах
        </div>
        <div class="main-section__description-mobile d-sm-none">
          Всю логистику и упаковку товара проделает франчайзинговый фулфилмент
          центр.
        </div>
        <div class="main-section__button" @click.prevent="modal = true">
          <ui-button fluid>
            Получить презентацию
            <template #icon>
              <ui-icon name="arrow-btn" />
            </template>
          </ui-button>
        </div>
      </div>
    </ui-wrapper>
    <ui-modal v-model="modal">
      <app-feedback-modal-presentation />
    </ui-modal>
  </section>
</template>

<script>
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      modal: false,
    }
  },

  // mounted() {
  //   const mm = gsap.matchMedia()

  //   mm.add('(min-width: 768px)', () => {
  //     const timeline = gsap.timeline({
  //       scrollTrigger: {
  //         markers: false,
  //         trigger: this.$refs.section,
  //         pin: true,
  //         pinSpacing: false,
  //         start: 'top top',
  //         end: () => this.$refs.section.offsetHeight, // end after scrolling 500px beyond the start
  //         scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //       },
  //     })
  //     timeline.to(this.$refs.section, {
  //       // y: -this.$refs.section.offsetHeight,
  //       opacity: 0.7,
  //     })
  //   })
  // },
}
</script>

<style lang="sass" scoped>
.main-section
  color: white
  position: relative
  z-index: 13
  overflow: unset
  ::v-deep
    background-color: #F4F4F4
  &:before
    content: ""
    position: absolute
    z-index: -1
    width: 100%
    height: 100%
    top: 0
    left: 0
    background-color: rgba(24, 29, 17, 0.635)
    border-radius: 0px 0px 50px 50px
    background: url("@/assets/images/main-section-bg-mb.jpg")
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    @media (min-width: map-get($breakpoints, 'sm'))
      border-radius: 0px 0px 70px 70px
      background: url("@/assets/images/main-section-bg.jpg")
      background-repeat: no-repeat
      background-position: center
      background-size: cover
    @media (min-width: map-get($breakpoints, 'xxxl'))
      border-radius: 0px 0px 80px 80px
  .wrapper
    ::d-deep
      overflow: hidden
  &__overlay
    position: absolute
    width: 100%
    height: 100%
    z-index: 17
    left: 0
    top: 0
    pointer-events: none
  &__inner
    padding: 148px 0 89px 6px
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 28px 0 100px 10px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 36px 0 130px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 55px 0 191px 0
      @media (max-height: 800px)
        padding: 30px 0 191px 0

  &__title
    margin-bottom: 25px
    position: relative
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 35px
    span.text-border
      margin-right: 2px
      display: inline-block
      @media (min-width: map-get($breakpoints, 'sm'))
        margin-right: 14px
      &::before
        padding: 0px 8px
        left: -13px
        top: -3px
        @media (min-width: map-get($breakpoints, 'sm'))
          padding: 0px 11px
          left: -14px
          top: -4px
        @media (min-width: map-get($breakpoints, 'lg'))
          padding: 0px 16px
          left: -20px
          top: -5px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          left: -20px
          top: -5px
          @media (max-height: 800px)
            padding: 0px 12px
            left: -16px
            top: -5px

  &__title-img
    position: absolute
    top: 104px
    right: -5px
    @media (min-width: map-get($breakpoints, 'sm'))
      top: 148px
      right: -114px
    @media (min-width: map-get($breakpoints, 'lg'))
      top: 224px
      right: -160px
      @media (max-height: 800px)
        top: 134px
        right: -130px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      top: 264px
      right: -181px
      @media (max-height: 800px)
        top: 172px
        right: -150px
    ::v-deep
      img
        width: 74px
        height: auto
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 102px
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 136px
          @media (max-height: 800px)
            width: 110px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 161px
          @media (max-height: 800px)
              width: 120px

  &__description-mobile
    font-size: 16px
    line-height: 24px
    font-family: 'Manrope-Light'
    margin-bottom: 44px

  &__description
    @media (min-width: map-get($breakpoints, 'sm'))
      font-family: 'Manrope-Light'
      font-size: 14px
      line-height: 21px
      margin-bottom: 30px
      max-width: 402px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 626px
      font-size: 22px
      line-height: 28px
      margin-bottom: 48px
      @media (max-height: 800px)
        max-width: 530px
        font-size: 18px
        line-height: 22px
        margin-bottom: 32px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 679px
      font-size: 24px
      line-height: 36px
      margin-bottom: 53px
      @media (max-height: 800px)
        max-width: 580px
        font-size: 20px
        line-height: 28px
        margin-bottom: 30px
    span
      font-family: 'Manrope-Bold'

  &__button
    max-width: 300px
    height: 70px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 370px
      height: 78px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 390px
      height: 87px
</style>
