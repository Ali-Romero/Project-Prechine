<template>
  <section class="main-section">
    <app-header></app-header>
    <ui-wrapper>
      <div class="main-section__inner">
        <h1 class="main-section__title">
          Франшиза
          <br />
          онлайн бизнеса:
          <br />
          <span class="text-border">продавай</span>товары
          <br />
          на маркетплейсах
          <br />
          <span class="text-border">и путешествуй</span>
          <span class="main-section__title-img">
            <img
              src="@/assets/images/multi-logo.png"
              width="161px"
              height="60px"
              alt="logo"
              class="d-block"
            />
          </span>
        </h1>
        <div class="main-section__description">
          Пользуйся фулфилмент сервисом франшизы и зарабатывай
          <span> до 270 000 рублей прибыли в месяц, </span>
          которых хватит
          <br />
          на поездки или проживание в курортных странах
        </div>
        <div class="main-section__button">
          <ui-button fluid>Получить презентацию</ui-button>
        </div>
      </div>
    </ui-wrapper>
  </section>
</template>

<style lang="sass" scoped>
.main-section
  border-radius: 0px 0px 70px 70px
  background: url("@/assets/images/main-section-bg.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover
  color: white
  @media (min-width: map-get($breakpoints, 'xxxl'))
    border-radius: 0px 0px 80px 80px

  &__inner
    padding: 28px 0 100px 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 36px 0 130px 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 55px 0 191px 0

  &__title
    font-size: 40px
    line-height: 55px
    text-transform: uppercase
    font-family: 'Manrope-ExtraBold'
    margin-bottom: 25px
    position: relative
    display: inline-block
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 56px
      line-height: 76px
      margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 35px
      font-size: 60px
      line-height: 84px

  &__title-img
    position: absolute
    top: 174px
    right: -121px
    @media (min-width: map-get($breakpoints, 'lg'))
      top: 242px
      right: -160px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      top: 264px
      right: -181px
    img
      width: 102px
      height: auto
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 136px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 161px

  &__description
    font-family: 'Manrope-Light'
    max-width: 456px
    font-size: 16px
    line-height: 20px
    margin-bottom: 30px
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
    max-width: 200px
    height: 60px
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 300px
      height: 60px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 370px
      height: 78px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 390px
      height: 87px
</style>
