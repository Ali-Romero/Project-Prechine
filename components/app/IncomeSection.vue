<template>
  <section id="income-section" class="income-section decor-bg">
    <ui-wrapper>
      <div class="income-section__inner">
        <div class="income-section__title-container">
          <h2 class="income-section__title title-secondary">
            Доходы партнёров
          </h2>
          <div class="income-section__title-info info">
            90% задач будут выполнять сотрудники головной компании, поэтому
            прибыль можно считать пассивным доходом.
          </div>
          <div class="income-section__cards-total">
            <ui-card total value="270 000 ₽" name="прибыли* в месяц"></ui-card>
            <div div class="income-section__cards-total-info">
              <ui-icon name="asterisk"></ui-icon>
              <div>
                Прибыль можно кратно увеличить, закупив больше разновидностей
                товаров.
              </div>
            </div>
          </div>
        </div>
        <div class="income-section__cards">
          <ul>
            <li>
              <ui-card value="3 типа" name="товаров для закупки"></ui-card>
            </li>
            <li>
              <ui-card value="700" name="продаж в месяц"></ui-card>
            </li>
            <li>
              <ui-card value="200 000 ₽" name="вложений в товар"></ui-card>
            </li>
            <li>
              <ui-card value="40%" name="рентабельности"></ui-card>
            </li>
            <li>
              <ui-card value="670 000 ₽" name="выручки в месяц"></ui-card>
            </li>
            <li>
              <ui-card value="1 месяц" name="до выхода на прибыль"></ui-card>
            </li>
            <li>
              <ui-card value="330%" name="средняя наценка"></ui-card>
            </li>
            <li>
              <ui-card value="5" name="месяцев окупаемости"></ui-card>
            </li>
          </ul>
          <div class="income-section__mobile-info-helper">
            <div>
              <ui-icon name="icon-hover"></ui-icon>
            </div>
            <span> Проведите в сторону, чтобы увидеть другие доходы </span>
          </div>
        </div>
        <div class="income-section__btn-content">
          <div class="income-section__btn-description">
            Обсудить финансовую модель и товары, которые продают партнёры
          </div>
          <div class="income-section__btn" @click.prevent="modal = true">
            <ui-button fluid>
              Подробнее о доходах
              <template #icon>
                <ui-icon name="arrow-btn" />
              </template>
            </ui-button>
          </div>
        </div>
      </div>
    </ui-wrapper>
    <ui-modal v-model="modal">
      <app-feedback-modal-call />
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
.income-section
  background-color: #212121
  color: white
  font-size: 14px
  line-height: 21px
  font-family: 'Manrope-Light'
  @media (min-width: map-get($breakpoints, 'lg'))
    font-size: 16px
    line-height: 20px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    font-size: 22px
    line-height: 33px
  &:before
    opacity: 0.3

  &__inner
    padding: 93px 0 90px 0

  &__title-container
    max-width: 282px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0 0 0 auto
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 357px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 421px

  &__title
    margin-bottom: 18px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 21px

  &__title-info
    margin-bottom: 39px
    text-align: left
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 52px

  &__cards
    max-width: 592px
    width: 100%
    margin-bottom: 60px
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 420px
      margin-bottom: 116px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 592px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 758px
    ul
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      width: 420px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: auto
      li
        margin-bottom: 10px
        @media (min-width: map-get($breakpoints, 'lg'))
          margin-bottom: 30px
        &:nth-child(7),
        &:nth-child(8)
          margin-bottom: 0

  &__cards-total
    max-width: 397px
    margin-left: 23px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-left: 0

  &__cards-total-info
    font-size: 12px
    line-height: 18px
    display: flex
    margin-top: 18px
    margin-bottom: 36px
    @media (min-width: map-get($breakpoints, 'lg'))
      justify-content: center
      font-size: 14px
      line-height: 20px
      margin-top: 20px
      margin-bottom: 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 16px
      line-height: 24px
      margin-top: 27px
    svg
      margin-right: 6px
      @media (min-width: map-get($breakpoints, 'lg'))
        margin-right: 11px
    div
      max-width: 238px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 316px

  &__mobile-info-helper
    display: flex
    align-items: center
    margin-left: 51px
    margin-top: 23px
    @media (min-width: map-get($breakpoints, 'sm'))
      display: none
    div
      margin-right: 17px
    span
      display: block
      max-width: 162px
      font-size: 12px
      line-height: 18px
      font-family: 'Manrope-Light'

  &__btn-content
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      align-items: center

  &__btn-description
    font-family: 'Manrope-ExtraBold'
    text-transform: uppercase
    width: 100%
    max-width: 827px
    font-size: 22px
    line-height: 31px
    text-align: center
    margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
      text-align: left
      max-width: 827px
      font-size: 21px
      line-height: 30px
      margin-right: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 827px
      font-size: 30px
      line-height: 42px
      margin-right: 135px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 40px
      line-height: 56px

  &__btn
    width: 100%
    max-width: 300px
    height: 70px
    margin: 0 auto
    @media (min-width: map-get($breakpoints, 'sm'))
      margin: 0
      max-width: 274px
      height: 66px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 350px
      height: 80px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 369px
      height: 87px
</style>
