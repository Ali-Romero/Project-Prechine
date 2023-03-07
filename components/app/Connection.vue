<template>
  <div class="connection" :class="classes">
    <div
      v-if="page === 'index'"
      class="connection__icon"
      @click.prevent="modal = true"
    >
      <ui-icon name="connection-phone" />
    </div>
    <div v-if="page === 'thanks'" class="connection__icon">
      <ui-icon name="connection-phone" />
    </div>
    <div class="connection__container">
      <div class="connection__num">
        <a href="tel:88003330168">8 (800) 333-01-68</a>
      </div>
      <div class="connection__description">
        <a v-if="page === 'index'" href="#" @click.prevent="modal = true"
          >Бесплатный звонок</a
        >
        <a v-if="page === 'thanks'" href="tel:88003330168"
          >позвоните сейчас <br />
          чтобы не ждать звонка</a
        >
      </div>
    </div>
    <ui-modal v-model="modal">
      <app-feedback-modal-call :title="title" />
    </ui-modal>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      modal: false,
    }
  },
  computed: {
    page() {
      return this.$route.name
    },
    classes() {
      return {
        'connection--header': this.header,
      }
    },
  },
}
</script>

<style lang="sass">
.connection
  display: flex
  color: #212121
  &--header
    .connection__container
      display: none
      @media (min-width: map-get($breakpoints, 'sm'))
        display: block
    .connection__icon
      width: 44px
      height: 44px
      background-color: #FF840C
      margin-right: 0
      align-items: center
      margin-top: 0
      @media (min-width: map-get($breakpoints, 'sm'))
        background-color: white
        width: 26px
        height: 26px
        margin-right: 8px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 33px
        height: 33px
        margin-right: 11px
      svg
        color: white
        @media (min-width: map-get($breakpoints, 'sm'))
          color: #FF840C
    .connection__description
      color: #212121

  &__icon
    width: 23px
    height: 23px
    border-radius: 100%
    display: flex
    justify-content: center
    align-items: flex-start
    margin-right: 16px
    margin-top: 5px
    @media (min-width: map-get($breakpoints, 'sm'))
      background-color: white
      width: 26px
      height: 26px
      margin-right: 8px
    @media (min-width: map-get($breakpoints, 'lg'))
      width: 33px
      height: 33px
      margin-right: 11px
    svg
      display: block
      width: 17px
      height: 17px
      color: #FF840C
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 14px
        height: 14px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 19px
        height: 19px

  &__num
    font-family: 'Manrope-Medium'
    font-size: 20px
    line-height: 27px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 16px
      line-height: 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 20px
      line-height: 27px

  &__description
    font-size: 13px
    line-height: 17px
    display: flex
    justify-content: center
    color: #7D7D7D
    text-align: center
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 15px
      line-height: 20px
</style>
