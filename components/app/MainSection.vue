<template>
  <section class="main-section">
    <app-header></app-header>
    <ui-wrapper>
      <div class="main-section__inner">
        <h1 class="main-section__title title">
          Франшиза
          <br />
          онлайн бизнеса:
          <br class="d-none d-sm-block" />
          <span class="text-border"> продавай</span> товары
          <br class="d-none d-sm-block" />
          на
          <br class="d-sm-none" />
          маркетплейсах
          <br class="d-none d-sm-block" />
          <span class="text-border text-border--mb">и путешествуй</span>
          <span class="main-section__title-img">
            <ui-image src="multi-logo.png" width="161" height="60" alt="logo" />
          </span>
        </h1>
        <div class="main-section__description">
          Пользуйся фулфилмент сервисом франшизы и зарабатывай
          <span> до 270 000 рублей прибыли в месяц, </span>
          которых хватит
          <br class="d-none d-sm-block" />
          на поездки или проживание в курортных странах
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
export default {
  data() {
    return {
      modal: false
    }
  }
}
</script>

<style lang="sass" scoped>
.main-section
  border-radius: 0px 0px 50px 50px
  background: url("@/assets/images/main-section-bg-mb.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  color: white
  @media (min-width: map-get($breakpoints, 'sm'))
    border-radius: 0px 0px 70px 70px
    background: url("@/assets/images/main-section-bg.jpg")
    background-repeat: no-repeat
    background-position: center
    background-size: cover
  @media (min-width: map-get($breakpoints, 'xxxl'))
    border-radius: 0px 0px 80px 80px

  &__inner
    padding: 148px 0 89px 6px
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 28px 0 100px 10px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 36px 0 130px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 55px 0 191px 0

  &__title
    margin-bottom: 25px
    position: relative
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 35px
    span.text-border
      margin-right: 10px
      display: inline-block
      @media (min-width: map-get($breakpoints, 'sm'))
        margin-right: 14px
      &::before
        padding: 0px 8px
        left: -11px
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

  &__title-img
    position: absolute
    top: 105px
    right: -4px
    @media (min-width: map-get($breakpoints, 'sm'))
      top: 174px
      right: -114px
    @media (min-width: map-get($breakpoints, 'lg'))
      top: 242px
      right: -160px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      top: 264px
      right: -181px
    ::v-deep
      img
        width: 74px
        height: auto
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 102px
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 136px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 161px

  &__description
    font-family: 'Manrope-Light'
    max-width: 456px
    font-size: 14px
    line-height: 21px
    margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 402px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 626px
      font-size: 22px
      line-height: 28px
      margin-bottom: 48px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 679px
      font-size: 24px
      line-height: 36px
      margin-bottom: 53px
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
