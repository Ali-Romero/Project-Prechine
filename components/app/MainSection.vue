<template>
  <section id="main-section" ref="section" class="main-section">
    <app-header></app-header>
    <ui-wrapper>
      <div class="main-section__inner">
        <h1 class="main-section__title title">
          <span class="title-mob">Франшиза удалённого бизнеса: </span>
          <span class="title-desctop">
            Франшиза
            <br />
            онлайн бизнеса:
          </span>
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
        <div class="main-section__price">
          <div class="main-section__price-list">
            <div class="main-section__price-item">
              <div class="main-section__price-icon">
                <ui-icon name="main-price-icon-1"></ui-icon>
              </div>
              <div class="main-section__price-description">
                Стоимость франшизы
                <span>490 т.р.</span>
              </div>
            </div>
            <div class="main-section__price-item">
              <div class="main-section__price-icon">
                <ui-icon name="main-price-icon-2"></ui-icon>
              </div>
              <div class="main-section__price-description">
                Инвестиции в товар
                <span>150 т.р.</span>
              </div>
            </div>
          </div>
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
      modal: false,
    }
  },
}
</script>

<style lang="sass" scoped>
.main-section
  color: white
  position: relative
  z-index: 1
  overflow: unset

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
  &__inner
    padding: 148px 0 79px 3px
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 16px 0 66px 10px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 20px 0 130px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 40px 0 191px 0
      @media (max-height: 800px)
        padding: 30px 0 191px 0

  &__title
    margin-bottom: 18px
    position: relative
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 25px
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
          padding: 0px 14px
          left: -20px
          top: -5px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          left: -18px
          top: -5px
          @media (max-height: 800px)
            padding: 0px 12px
            left: -16px
            top: -5px
    span.title-mob
      font-size: 17px
      line-height: 24px
      text-transform: uppercase
      display: block
      font-family: 'Manrope-Regular'
      font-weight: 400
      @media (min-width: map-get($breakpoints, 'sm'))
        display: none
    span.title-desctop
      display: none
      @media (min-width: map-get($breakpoints, 'sm'))
        display: inline
  &__title-img
    position: absolute
    top: 60px
    right: 0
    @media (min-width: map-get($breakpoints, 'sm'))
      top: 124px
      right: -114px
    @media (min-width: map-get($breakpoints, 'lg'))
      top: 224px
      right: -160px
      @media (max-height: 800px)
        top: 120px
        right: -124px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      top: 226px
      right: -181px
      @media (max-height: 800px)
        top: 172px
        right: -150px
    ::v-deep
      img
        width: 74px
        height: auto
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 90px
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 136px
          @media (max-height: 800px)
            width: 100px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 154px
          @media (max-height: 800px)
              width: 120px

  &__description-mobile
    font-size: 16px
    line-height: 24px
    font-family: 'Manrope-Light'
    margin-bottom: 18px

  &__description
    @media (min-width: map-get($breakpoints, 'sm'))
      font-family: 'Manrope-Light'
      font-size: 16px
      line-height: 24px
      margin-bottom: 30px
      max-width: 458px
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

  &__price
    margin: 0 0 26px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      margin: 0 0 30px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin: 0 0 53px 0
  &__price-list
    display: flex
  &__price-item
    margin: 0 40px 0 0
    display: flex
    align-items: center
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin: 0 60px 0 0
    &:last-child
      margin: 0
  &__price-icon
    margin: 0 18px 0 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin: 0 24px 0 0
    ::v-deep
      svg
        width: 38px
        height: 38px
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 40px
          height: 40px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 60px
          height: 60px
  &__price-description
    font-size: 14px
    line-height: 18px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 14px
      line-height: 16px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 16px
      line-height: 20px
      @media (max-height: 800px)
        font-size: 16px
        line-height: 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 18px
      line-height: 27px
      @media (max-height: 800px)
        font-size: 16px
        line-height: 20px
    span
      display: block
      font-family: 'Manrope-ExtraBold'

  &__button
    max-width: 300px
    height: 70px
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 260px
      height: 56px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 370px
      height: 78px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 390px
      height: 87px
</style>
