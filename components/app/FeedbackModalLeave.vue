<template>
  <ui-form class="feedback-modal-leave" @submit="submit">
    <div class="feedback-modal-leave__wrapper">
      <div class="feedback-modal-leave__top">
        <div class="feedback-modal-leave__title">
          Уже уходите?
          <div class="feedback-modal-leave__description">
            Не упустите свой шанс начать бизнес на маркетплейсах.
          </div>
          <div class="feedback-modal-leave__description-info">
            <span>
              <ui-icon name="icon-pdf"></ui-icon>
            </span>
            <span>Получите бесплатную презентацию на почту</span>
          </div>
        </div>
        <div class="feedback-modal-leave__image">
          <img
            src="@/assets/images/feedback-leave-img.png"
            alt="image"
            width="313"
            height="314"
            loading="lazy"
          />
        </div>
      </div>
      <div class="feedback-modal-leave__container">
        <ui-validator
          v-slot="{ error }"
          show-message
          rules="required|phone"
          class="feedback-modal-leave__input"
        >
          <ui-input-phone v-model="fields.phone" :error="error" />
        </ui-validator>
        <ui-validator
          v-slot="{ error }"
          show-message
          rules="required|email"
          class="feedback-modal-leave__input"
        >
          <ui-input-email v-model="fields.email" :error="error" />
        </ui-validator>
        <ui-validator
          v-slot="{ error }"
          show-message
          class="feedback-modal-leave__input"
          rules="required"
        >
          <ui-input-name v-model="fields.name" :error="error" />
        </ui-validator>
        <div class="feedback-modal-leave__button">
          <ui-button fluid type="submit">Получить консультацию</ui-button>
        </div>
        <div class="feedback-modal-leave__agree">
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
        phone: ''
      }
    }
  },
  methods: {
    async submit() {
      await this.$feedback.submit(this.fields)
    }
  }
}
</script>

<style lang="sass" scoped>
.feedback-modal-leave
  background: #FFFFFF
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.08)
  border-radius: 16px
  max-width: 700px
  padding: 33px 23px 20px 23px
  margin: 0 auto
  overflow: hidden
  color: #212121
  width: 300px
  @media (min-width: map-get($breakpoints, 'sm'))
    padding: 33px 40px 23px 40px
    border-radius: 20px
    width: 700px
  @media (min-width: map-get($breakpoints, 'lg'))
    border-radius: 40px
    padding: 39px 50px 26px 50px
    width: 856px
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
      margin-bottom: 28px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 25px
      line-height: 36px
      margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 32px
      line-height: 42px
      margin-bottom: 21px
    span
      font-family: 'Manrope-Light'
      display: block

  &__description
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 6px 0 10px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      margin: 17px 0 15px 0

  &__description,
  &__description-info
    font-size: 17px
    line-height: 24px
    max-width: 398px
    text-transform: initial
    font-family: 'Manrope-Light'
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 20px
      line-height: 26px
      max-width: 398px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 24px
      line-height: 31px
      max-width: 398px

  &__description-info
    display: flex
    align-items: center
    justify-content: center
    span
      &:first-child
        display: none
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 50px
          height: 50px
          border-radius: 100%
          display: flex
          justify-content: center
          align-items: center
          background-color: #F4F4F4
          margin-right: 12px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          margin-right: 18px
          width: 68px
          height: 68px
        svg
          width: 30px
          height: 30px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            width: 34px
            height: 34px
      &:last-child
        max-width: 181px
        @media (min-width: map-get($breakpoints, 'lg'))
          max-width: 255px

  &__image
    display: flex
    justify-content: center
    margin-bottom: 20px
    position: relative
    z-index: 1
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: -40px
      position: unset
      display: block
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
        width: 102px
        height: auto
        border-radius: 0 0 100% 100%
        margin-bottom: 6px
        @media (min-width: map-get($breakpoints, 'sm'))
          border-radius: 0
          margin-bottom: 0
          width: 188px
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 228px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 313px

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
