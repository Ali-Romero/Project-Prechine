<template>
  <ui-form class="feedback-modal-call" @submit="submit">
    <div class="feedback-modal-call__wrapper">
      <div class="feedback-modal-call__top">
        <div class="feedback-modal-call__title">
          Запишитесь на онлайн-консультацию,
          <span class="feedback-modal-call__title-info"
            >чтобы узнать подробнее о франшизе PriChina</span
          >
        </div>
        <div class="feedback-modal-call__image">
          <img
            src="@/assets/images/feedback-call-img.png"
            alt="image"
            width="389"
            height="366"
            loading="lazy"
          />
        </div>
      </div>
      <div class="feedback-modal-call__container">
        <ui-validator
          v-slot="{ error }"
          show-message
          rules="required|phone"
          class="feedback-modal-call__input"
        >
          <ui-input-phone v-model="fields.phone" :error="error" />
        </ui-validator>
        <ui-validator
          v-slot="{ error }"
          show-message
          rules="required|email"
          class="feedback-modal-call__input"
        >
          <ui-input-email v-model="fields.email" :error="error" />
        </ui-validator>
        <ui-validator
          v-slot="{ error }"
          show-message
          class="feedback-modal-call__input"
          rules="required"
        >
          <ui-input-name v-model="fields.name" :error="error" />
        </ui-validator>
        <div class="feedback-modal-call__button">
          <ui-button fluid type="submit">Получить консультацию</ui-button>
        </div>
        <div class="feedback-modal-call__agree">
          <ui-agree></ui-agree>
        </div>
      </div>
    </div>
  </ui-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      fields: {
        name: '',
        email: '',
        phone: '',
        'section-name-text':
          'Запишитесь на онлайн-консультацию, чтобы узнать подробнее о франшизе PriChina',
        'section-btn-text': 'Получить консультацию',
        'section-name': 'Закрытая',
      },
    }
  },
  methods: {
    async submit() {
      await this.$feedback.submit(this.fields)
    },
  },
}
</script>

<style lang="sass" scoped>
.feedback-modal-call
  background: #FFFFFF
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.08)
  border-radius: 16px
  width: 300px
  padding: 33px 23px 20px 23px
  margin: 0 auto
  overflow: hidden
  @media (min-width: map-get($breakpoints, 'sm'))
    padding: 33px 40px 23px 40px
    border-radius: 20px
    width: 700px
  @media (min-width: map-get($breakpoints, 'lg'))
    border-radius: 40px
    width: 856px
    padding: 39px 50px 26px 50px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    width: 933px
    padding: 49px 60px 36px 60px

  &__wrapper
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      justify-content: space-between

  &__top
    max-width: 245px
    display: flex
    flex-direction: column-reverse
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      display: block
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 339px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 435px

  &__title
    font-size: 18px
    line-height: 25px
    margin-bottom: 20px
    text-transform: uppercase
    color: #212121
    font-family: 'Manrope-ExtraBold'
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: left
      font-size: 20px
      line-height: 28px
      margin-bottom: 44px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 25px
      line-height: 36px
      margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 32px
      line-height: 42px
      margin-bottom: 65px

  &__title-info
    font-family: 'Manrope-Light'
    display: block

  &__image
    display: flex
    justify-content: center
    margin-bottom: 20px
    position: relative
    z-index: 1
    @media (min-width: map-get($breakpoints, 'sm'))
      position: unset
      display: block
      margin-bottom: -100px
      margin-left: -20px
    &:before
      content: ""
      position: absolute
      width: 100px
      height: 100px
      background-color: #EFEFEF
      border-radius: 100%
      top: 0
      left: 0
      right: 0
      bottom: 0
      margin: auto
      z-index: -1
      @media (min-width: map-get($breakpoints, 'sm'))
        content: none

    ::v-deep
      img
        width: 108px
        height: auto
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 272px
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 347px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 389px

  &__container
    max-width: 258px
    width: 100%
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 292px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 316px

  &__input
    margin-bottom: 16px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 20px
    .ui-input
      height: 57px
      padding: 0 12px 0 20px
      @media (min-width: map-get($breakpoints, 'lg'))
        height: 67px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        height: 87px
        padding: 0 20px 0 30px

  &__button
    height: 57px
    margin-bottom: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      height: 65px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 16px
      height: 87px

  &__agree
    ::v-deep
      .agree
        align-items: flex-start
        &__description
          max-width: 259px
          text-align: left
</style>
