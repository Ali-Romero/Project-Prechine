<template>
  <ui-form class="feedback" @submit="submit">
    <div class="feedback__top">
      <div class="feedback__title">
        Принять участие <br class="d-block d-sm-none" />
        в экскурсии:
      </div>
      <div class="feedback__checkbox">
        <div>
          <ui-checkbox
            v-model="fields.action"
            value="приехать в Казань (в том числе на экскурсию)"
            radio
            >Приехать в Казань
            <br />
            <span>(в том числе на экскурсию)</span>
          </ui-checkbox>
        </div>
        <div>
          <ui-checkbox v-model="fields.action" value="пройти онлайн" radio
            >Пройти онлайн</ui-checkbox
          >
        </div>
      </div>
    </div>
    <div class="feedback__container">
      <ui-validator
        v-slot="{ error }"
        show-message
        rules="required|phone"
        class="feedback__input"
      >
        <ui-input-phone v-model="fields.phone" :error="error" />
      </ui-validator>
      <ui-validator
        v-slot="{ error }"
        show-message
        rules="required|email"
        class="feedback__input"
      >
        <ui-input-email v-model="fields.email" :error="error" />
      </ui-validator>
      <ui-validator
        v-slot="{ error }"
        show-message
        class="feedback__input"
        rules="required"
      >
        <ui-input-name v-model="fields.name" :error="error" />
      </ui-validator>
      <div class="feedback__button">
        <ui-button fluid type="submit">Принять участие</ui-button>
      </div>
    </div>
    <div class="feedback__agree">
      <ui-agree></ui-agree>
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
        action: 'приехать в Казань (в том числе на экскурсию)'
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
.feedback
  background-color: #FFFFFF
  width: 100%
  color: #212121
  border-radius: 24px
  padding: 30px 22px
  max-width: 1439px
  @media (min-width: map-get($breakpoints, 'sm'))
    padding: 17px 9px
  @media (min-width: map-get($breakpoints, 'lg'))
    padding: 40px 34px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    padding: 46px 76px
    max-width: 1439px

  &__top
    margin-bottom: 26px
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      margin-bottom: 16px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 26px

  &__title
    text-transform: uppercase
    color: #212121
    font-family: 'Manrope-ExtraBold'
    font-size: 18px
    line-height: 24px
    text-align: center
    margin-bottom: 16px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-right: 36px
      margin-bottom: 0
      margin-left: 10px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-left: 0
      text-align: left
      font-size: 20px
      line-height: 21px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 30px
      line-height: 40px
      margin-right: 50px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 34px
      line-height: 48px
      margin-right: 61px

  &__container
    margin-bottom: 14px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 26px
      display: flex
      justify-content: space-between
      margin-bottom: 16px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 26px

  &__input
    max-width: 260px
    width: 100%
    margin: 0 auto
    margin-bottom: 16px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      margin-bottom: 0
      max-width: 180px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 260px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 308px
    &:last-child
      margin-bottom: 0

  &__button
    max-width: 260px
    width: 100%
    margin: 0 auto
    height: 60px
    @media (min-width: map-get($breakpoints, 'sm'))
      height: auto
      margin: 0
      max-width: 180px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 260px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 308px

  &__checkbox
    max-width: 193px
    width: 100%
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      width: auto
      margin: 0
      max-width: 100%
      display: flex
      align-items: flex-start
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-top: 6px
    div
      margin-bottom: 12px
      @media (min-width: map-get($breakpoints, 'sm'))
        margin-bottom: 0
        margin-right: 16px
      @media (min-width: map-get($breakpoints, 'lg'))
        margin-right: 34px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        margin-right: 44px
      &:last-child
        margin-right: 0
</style>
