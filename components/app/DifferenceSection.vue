<template>
  <section ref="section" class="difference-section">
    <ui-wrapper class="difference-section__wrapper">
      <div class="difference-section__inner">
        <div class="difference-section__circle">
          <app-difference-circle-slider :slide="1" />
        </div>
        <div class="difference-section__header">
          <h2 class="difference-section__title title-secondary">
            Франшиза или обучение? Показываем разницу
          </h2>
          <div class="difference-section__title-info info">
            Объясняем, чем франшиза отличается от обучения бизнесу на
            маркетплейсах и показываем какие выгоды она даёт.
          </div>
        </div>
        <div ref="content" class="difference-section__content">
          <div class="difference-section__steps d-flex d-md-none">
            <div class="difference-section__step">
              <app-difference-title title-difference-num="01">
                <template #difference-title-text> Поиск товара </template>
              </app-difference-title>
            </div>
            <div v-if="false" class="difference-section__step">
              <app-difference-title title-difference-num="02">
                <template #difference-title-text> Поиск товара </template>
              </app-difference-title>
            </div>
            <div v-if="false" class="difference-section__step">
              <app-difference-title title-difference-num="03">
                <template #difference-title-text> Поиск товара </template>
              </app-difference-title>
            </div>
            <div v-if="false" class="difference-section__step">
              <app-difference-title title-difference-num="04">
                <template #difference-title-text> Поиск товара </template>
              </app-difference-title>
            </div>
          </div>
          <div ref="steps" class="difference-section__steps d-none d-md-block">
            <div class="difference-section__step">
              <app-difference-title title-difference-num="01">
                <template #difference-title-text> Поиск товара </template>
              </app-difference-title>
            </div>
            <div class="difference-section__step">
              <app-difference-title title-difference-num="02">
                <template #difference-title-text> Поиск товара </template>
              </app-difference-title>
            </div>
            <div class="difference-section__step">
              <app-difference-title title-difference-num="03">
                <template #difference-title-text> Поиск товара </template>
              </app-difference-title>
            </div>
            <div class="difference-section__step">
              <app-difference-title title-difference-num="04">
                <template #difference-title-text> Поиск товара </template>
              </app-difference-title>
            </div>
          </div>
          <div class="difference-section__cards">
            <app-difference-card
              black-title="Франшиза PriChina"
              white-title="Обучение бизнесу на маркетплейсах"
              black-text="На старте и по запросу предоставляется список товаров, перспективных для продажи, со всеми данными: цена закупки, рекомендованная цена продажи и объём партии."
              white-text="Раскроют принцип аналитики продаж на маркетплейсах и передадут список инструментов для самостоятельного поиска товаров под реализацию."
              blue-text="Фулфилмент центр PriChina в 7 раз дешевле найма собственного штата и аренды склада, а также имеет тарифы ниже конкурентов."
            />
          </div>
        </div>
      </div>
      <div class="difference-section__bottom-info">
        Обеспечим пассивный доход на взаимовыгодных условиях:
        <span>
          вы инвестируете в товар, а всю работу с логистикой и закупкой
          выполняем мы.
        </span>
      </div>
    </ui-wrapper>
  </section>
</template>

<script>
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    // const timeline = gsap.timeline({
    //   scrollTrigger: {
    //     markers: true,
    //     trigger: this.$refs.section,
    //     pin: true, // pin the trigger element while active
    //     pinSpacing: true,
    //     start: "top top", // when the top of the trigger hits the top of the viewport
    //     end: () => this.$refs.section.offsetHeight * 4, // end after scrolling 500px beyond the start
    //     scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //   }
    // })
    // const $steps = this.$refs.steps
    // const [firstStep, ...steps] = $steps.querySelectorAll('.difference-section__step')
    // timeline.fromTo(firstStep, { y: '0' }, { y: '-100%' })
    // steps.forEach((step, index) => {
    //   timeline.fromTo(
    //     step,
    //     {
    //       y: 0,
    //     },
    //     {
    //       y: () => -($steps.offsetHeight + (step.offsetHeight / 2)),
    //       onStart: () => { console.log('onStart', index + 2) },
    //       onReverseComplete: () => { console.log('onReverseComplete', index + 1) }
    //     }
    //   )
    // })
  }
}
</script>

<style lang="sass" scoped>
.difference-section
  background-color: #F4F4F4
  overflow: hidden
  .ui-wrapper
    ::v-deep
      max-width: 300px
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 990px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 1170px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 1482px
  &__wrapper
    position: relative
    z-index: 1
  &__circle
    position: absolute
    top: 319px
    right: 0
    left: -98px
    z-index: -1
    width: 160%
    @media (min-width: map-get($breakpoints, 'sm'))
      width: auto
      left: 0
      top: 289px
    @media (min-width: map-get($breakpoints, 'md'))
      left: auto
      top: 200px
      right: calc(100% - 173px)
    @media (min-width: map-get($breakpoints, 'lg'))
      right: calc(100% - 199px)
    @media (min-width: map-get($breakpoints, 'xxxl'))
      top: 161px
    &:before
      content: ""
      position: absolute
      width: 130%
      height: 50%
      background-color: #F4F4F4
      bottom: 0
      left: -64px
      z-index: 1
      @media (min-width: map-get($breakpoints, 'sm'))
        left: auto
        width: 100%
      @media (min-width: map-get($breakpoints, 'md'))
        content: none
  &__header
    margin-bottom: 87px
    @media (min-width: map-get($breakpoints, 'md'))
      margin-bottom: 52px
  &__inner
    padding: 92px 0
    @media (min-width: map-get($breakpoints, 'md'))
      padding: 92px 0 100px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 92px 0 133px 0
  &__title
    max-width: 460px
    margin: 0 auto 21px auto
    text-align: center
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 700px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 864px
  &__title-info
    font-family: 'Manrope-Light'
    margin: 0 auto
    text-align: center
    color: #7D7D7D
    max-width: 462px
    font-family: 'Manrope-Light'
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 623px
  &__content
    @media (min-width: map-get($breakpoints, 'md'))
      padding-left: 230px
      display: flex
  &__cards
    display: flex
    justify-content: center
    margin: 0 auto
    max-width: 300px
    width: 100%
    @media (min-width: map-get($breakpoints, 'md'))
      margin: 0
      display: block
      max-width: 507px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 594px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 740px

  &__steps
    justify-content: center
    align-items: center
    flex-direction: column
    margin-bottom: 24px
    @media (min-width: map-get($breakpoints, 'md'))
      margin-bottom: 0
      outline: 1px solid red
      position: relative
      height: 396px
      flex-grow: 1
      overflow: hidden
    @media (min-width: map-get($breakpoints, 'lg'))
      height: 450px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      height: 600px
  &__step
    @media (min-width: map-get($breakpoints, 'md'))
      outline: 1px solid green
      width: 100%
      position: absolute
      left: 0
      top: 100%
      display: flex
      justify-content: center
      align-items: flex-start
  &__bottom-info
    position: relative
    z-index: 1
    font-family: 'Manrope-Light'
    text-align: center
    margin: 0 auto
    max-width: 885px
    font-size: 20px
    line-height: 30px
    padding: 0 0 103px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 24px
      line-height: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 885px
      font-size: 30px
      line-height: 45px
    &:before
      content: ""
      background: url("@/assets/images/info-icon.svg")
      background-repeat: no-repeat
      background-position: center
      background-size: cover
      position: absolute
      z-index: -1
      width: 60px
      height: 60px
      top: -44px
      left: 0
      right: 0
      margin: 0 auto
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 80px
        height: 80px
        top: -58px
    span
      font-size: 14px
      line-height: 21px
      display: block
      @media (min-width: map-get($breakpoints, 'sm'))
        font-size: 18px
        line-height: 26px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 22px
        line-height: 33px
</style>
