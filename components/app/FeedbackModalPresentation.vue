<template>
  <ui-form class="feedback-modal-presentation" @submit="submit">
    <div class="feedback-modal-presentation__wrapper">
      <div class="feedback-modal-presentation__top">
        <div class="feedback-modal-presentation__title">
          Пoлучитe пpeзeнтацию и финaнcoвую мoдeль франшизы
        </div>
        <div class="feedback-modal-presentation__image">
          <img
            src="@/assets/images/feedback-presentation-img.png"
            alt="image"
            width="398"
            height="326"
            loading="lazy"
          />
        </div>
      </div>
      <div class="feedback-modal-presentation__container">
        <ui-validator
          v-slot="{ error }"
          show-message
          rules="required|phone"
          class="feedback-modal-presentation__input"
        >
          <ui-input-phone v-model="fields.phone" :error="error" />
        </ui-validator>
        <ui-validator
          v-slot="{ error }"
          show-message
          rules="required|email"
          class="feedback-modal-presentation__input"
        >
          <ui-input-email v-model="fields.email" :error="error" />
        </ui-validator>
        <ui-validator
          v-slot="{ error }"
          show-message
          class="feedback-modal-presentation__input"
          rules="required"
        >
          <ui-input-name v-model="fields.name" :error="error" />
        </ui-validator>
        <div class="feedback-modal-presentation__button">
          <ui-button fluid type="submit">Получить материалы</ui-button>
        </div>
        <div class="feedback-modal-presentation__agree">
          <ui-agree></ui-agree>
        </div>
      </div>
    </div>
  </ui-form>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      fields: {
        name: '',
        email: '',
        phone: '',
        'section-title': this.title,
        'section-name-text':
          'Пoлучитe пpeзeнтацию и финaнcoвую мoдeль франшизы',
        'section-btn-text': this.btnText,
        'section-btn-text-2': 'Получить материалы',
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
.feedback-modal-presentation
  background: #FFFFFF
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.08)
  border-radius: 16px
  width: 300px
  padding: 33px 23px 20px 23px
  margin: 0 auto
  overflow: hidden
  color: #212121
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
    max-width: 272px
    display: flex
    flex-direction: column-reverse
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      display: block
      margin: 0
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 347px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 429px

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
      margin-bottom: 25px

  &__image
    display: flex
    justify-content: center
    margin-bottom: 30px
    position: relative
    z-index: 1
    @media (min-width: map-get($breakpoints, 'sm'))
      position: unset
      margin-bottom: 0
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
        width: 96px
        height: auto
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 272px
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 347px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 425px

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
