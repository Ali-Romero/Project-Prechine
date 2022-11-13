<template>
  <section class="difference-section">
    <ui-wrapper>
      <div class="difference-section__inner">
        <h2 class="difference-section__title title-secondary">
          Франшиза или обучение? Показываем разницу
        </h2>
        <div class="difference-section__title-info">
          Объясняем, чем франшиза отличается от обучения бизнесу на
          маркетплейсах и показываем какие выгоды она даёт.
        </div>
        <div class="difference-section__content">
          <app-difference-card
            positive-text="На старте и по запросу предоставляется список товаров, перспективных для продажи, со всеми данными: цена закупки, рекомендованная цена продажи и объём партии."
            negative-text="Раскроют принцип аналитики продаж на маркетплейсах и передадут список инструментов для самостоятельного поиска товаров под реализацию."
          >
          </app-difference-card>
          <app-difference-title title-difference-num="01">
            <template #difference-title-text>
              Поиск товара
            </template>
          </app-difference-title>
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

<style lang="sass" scoped>
.difference-section
  background-color: #F4F4F4
  &__inner
    padding: 92px 0 103px 0
  &__title
    max-width: 864px
    margin: 0 auto 21px auto
    text-align: center
  &__title-info
    margin: 0 auto 52px auto
    font-size: 22px
    line-height: 33px
    text-align: center
    color: #7D7D7D
    max-width: 623px
    font-family: 'Manrope-Light'
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
