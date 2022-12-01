<template>
  <footer class="footer">
    <ui-wrapper>
      <div class="footer__inner">
        <div class="footer__row">
          <div class="footer__col">
            <div class="footer__date">
              PriChina ®, 2017-{{ new Date().getFullYear() }} г.
            </div>
            <div class="footer__name">
              ИП Хуснутдинова А. Р., <br class="d-none d-sm-block" />
              ИНН 25301919960
            </div>
            <div class="footer__arms">
              <img
                src="@/assets/images/arms.png"
                alt="arms"
                width="40"
                height="40"
                loading="lazy"
              />
              <span
                >Республика Татарстан, <br class="d-none d-sm-block" />
                Казань</span
              >
            </div>
          </div>
          <div class="footer__col">
            <div v-if="page === 'index'" class="footer__logo">
              <a href="#" target="_blank">
                <img
                  src="@/assets/images/logo-main.svg"
                  alt="logo"
                  width="79"
                  height="64"
                  loading="lazy"
                />
              </a>
            </div>
            <div class="footer__made-in">Сделано в России 🤘</div>
            <div class="footer__policy">
              <a href="#" @click.prevent="modal = true"
                >Политика конфиденциальности</a
              >
            </div>
          </div>
          <div class="footer__col">
            <div class="footer__connection">
              <app-connection></app-connection>
            </div>
            <div v-if="page === 'index'" class="footer__kaz">
              <a href="https://kazanexpress.ru/prichina" target="_blank">
                <img
                  src="@/assets/images/k-express.png"
                  alt="KazanExpress"
                  width="148"
                  height="19"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ui-wrapper>
    <ui-modal v-model="modal">
      <app-privacy />
    </ui-modal>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    }
  },
  computed: {
    page() {
      return this.$route.name
    },
  },
}
</script>

<style lang="sass" scoped>
.footer
  font-size: 14px
  line-height: 21px
  color: #212121
  @media (min-width: map-get($breakpoints, 'sm'))
    font-size: 13px
    line-height: 19px
  @media (min-width: map-get($breakpoints, 'lg'))
    font-size: 14px
    line-height: 21px

  &__inner
    padding: 30px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 24px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 30px 0

  &__row
    display: flex
    justify-content: space-between
    flex-direction: column-reverse
    @media (min-width: map-get($breakpoints, 'sm'))
      flex-direction: row

  &__col
    &:nth-child(2)
      order: 1
      display: flex
      flex-direction: column
      justify-content: flex-end
      @media (min-width: map-get($breakpoints, 'sm'))
        order: unset

  &__date,
  &__name
    margin-bottom: 6px
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: left
      margin-bottom: 10px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 14px

  &__arms
    display: flex
    align-items: center
    justify-content: center
    @media (min-width: map-get($breakpoints, 'sm'))
      justify-content: flex-start
    img
      width: 40px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 36px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 40px
    img
      margin-right: 10px
      @media (min-width: map-get($breakpoints, 'lg'))
        margin-right: 14px

  &__logo
    margin-bottom: 28px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 31px
    a
      display: flex
      justify-content: center
      pointer-events: none

    img
      width: 60px
      height: auto
      margin-bottom: 16px
      @media (min-width: map-get($breakpoints, 'sm'))
        margin-bottom: 0
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 79px

  &__made-in
    text-align: center

  &__policy
    text-align: center
    margin-bottom: 28px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
    a
      position: relative
      color: #1776D4
      &::before
        content: ""
        position: absolute
        width: 100%
        height: 1px
        background-color: #1776D4
        bottom: 0

  &__connection
    display: flex
    justify-content: center
    margin-bottom: 28px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 58px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 68px
  &__kaz
    margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'sm'))
      padding-left: 36px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding-left: 48px
    a
      display: flex
      justify-content: center
      @media (min-width: map-get($breakpoints, 'sm'))
        display: block
    img
      width: 110px
      height: auto
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 130px
</style>
