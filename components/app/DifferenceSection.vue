<template>
  <section class="difference-section">
    <ui-wrapper class="difference-section__wrapper">
      <div class="difference-section__circle">
        <app-difference-circle-slider />
      </div>
      <div class="difference-section__inner">
        <div class="difference-section__header">
          <h2 class="difference-section__title title-secondary">
            Франшиза или обучение? Показываем разницу
          </h2>
          <div class="difference-section__title-info">
            Объясняем, чем франшиза отличается от обучения бизнесу на
            маркетплейсах и показываем какие выгоды она даёт.
          </div>
        </div>
        <div class="difference-section__content">
          <div class="difference-section__number-titles">
            <div class="difference-section__number-title">
              <app-difference-title title-difference-num="01">
                <template #difference-title-text>
                  Поиск товара
                </template>
              </app-difference-title>
            </div>
            <div class="difference-section__number-title">
              <app-difference-title title-difference-num="01">
                <template #difference-title-text>
                  Поиск товара
                </template>
              </app-difference-title>
            </div>
          </div>
          <div class="difference-section__cards">
            <app-difference-card
              positive-text="На старте и по запросу предоставляется список товаров, перспективных для продажи, со всеми данными: цена закупки, рекомендованная цена продажи и объём партии."
              negative-text="Раскроют принцип аналитики продаж на маркетплейсах и передадут список инструментов для самостоятельного поиска товаров под реализацию."
            ></app-difference-card>
          </div>
        </div>
        <div class="difference-section__bottom-info">
          Обеспечим пассивный доход на взаимовыгодных условиях:
          <span
            >вы инвестируете в товар, а всю работу с логистикой и закупкой
            выполняем мы.</span
          >
        </div>
      </div>
    </ui-wrapper>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.difference-section
  background-color: #F4F4F4
  overflow: hidden
  &__wrapper
    position: relative
  &__circle
    position: absolute
    top: 161px
    right: calc(100% - 199px)
  &__header
    margin-bottom: 52px
  &__inner
    padding: 92px 0 103px 0
  &__title
    max-width: 864px
    margin: 0 auto 21px auto
    text-align: center
  &__title-info
    margin: 0 auto
    font-size: 22px
    line-height: 33px
    text-align: center
    color: #7D7D7D
    max-width: 623px
    font-family: 'Manrope-Light'
  &__content
    padding-left: 230px
    display: flex
  &__number-titles
    flex-grow: 1
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
  &__number-title
    padding-top: 160px
    height: 60vh
  &__bottom-info
    position: relative
    z-index: 1
    font-family: 'Manrope-Light'
    text-align: center
    margin: 0 auto
    max-width: 885px
    font-size: 30px
    line-height: 45px
    &:before
      content: ""
      background: url("@/assets/images/info-icon.svg")
      background-repeat: no-repeat
      background-position: center
      position: absolute
      z-index: -1
      width: 80px
      height: 80px
      top: -58px
      left: 0
      right: 0
      margin: 0 auto
    span
      font-size: 22px
      line-height: 33px
      display: block
</style>
