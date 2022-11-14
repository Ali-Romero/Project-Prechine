<template>
  <div class="agree">
    <div class="agree__checkbox">
      <ui-icon name="agree-checkbox"></ui-icon>
    </div>
    <div class="agree__description">
      Я подтверждаю, что ознакомлен и даю согласие на обработку персональных
      данных на условиях и для целей, определяемых
      <br class="d-lg-none" />
      <a href="#" @click.prevent="modal = true">Политикой конфиденциальности</a>
    </div>
    <ui-modal v-model="modal">
      <app-privacy />
    </ui-modal>
  </div>
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
.agree
  display: flex
  align-items: flex-start
  justify-content: center
  @media (min-width: map-get($breakpoints, 'lg'))
    align-items: center
  &__checkbox
    margin-right: 4px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 10px
  &__description
    font-size: 10px
    line-height: 13px
    color: #7D7D7D
    font-family: 'Manrope-Light'
    text-align: left
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: center
      font-size: 11px
      line-height: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      text-align: left
      font-size: 12px
      line-height: 17px
    a
      text-decoration: underline
</style>
