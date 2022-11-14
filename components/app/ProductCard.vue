<template>
  <div class="product-card">
    <div class="product-card__image">
      <ui-image
        :src="image"
        alt="image"
        width="452"
        height="550"
        sizes="xxs:280px lg:267px xxxl:452px"
      ></ui-image>
    </div>
    <div class="product-card__info">
      <div class="product-info">
        <div class="product-info__title">{{ title }}</div>
        <div class="product-info__table">
          <ul>
            <li>
              <div>Количество продаж:</div>
              <span>{{ amount }}</span>
            </li>
            <li>
              <div>Выручка:</div>
              <span>{{ profit }}</span>
            </li>
          </ul>
        </div>
        <div class="product-info__price">
          <ul>
            <li>
              <div>Цена закупки:</div>
              <span>{{ pricePurchase }}</span>
            </li>
            <li>
              <div>Цена продажи:</div>
              <span>{{ priceSale }}</span>
            </li>
            <li>
              <div>Наценка:</div>
              <span>{{ markup }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      default: '',
    },
    profit: {
      type: String,
      default: '',
    },
    pricePurchase: {
      type: String,
      default: '',
    },
    priceSale: {
      type: String,
      default: '',
    },
    markup: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
.product-card
  @media (min-width: map-get($breakpoints, 'sm'))
    display: flex
  &__image
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-right: 10px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-right: 50px
    ::v-deep
      img
        width: 260px
        height: auto
        border-radius: 14px
        margin: 0 auto
        @media (min-width: map-get($breakpoints, 'sm'))
          margin: 0
          width: 186px
          border-radius: 10px
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 267px
          border-radius: 14px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 452px
  &__info
    padding: 19px 0 0 0
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 4px 0 0 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 17px 0 0 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 44px 0 0 0
.product-info
  color: #212121
  ul
    display: flex
    align-items: center
    justify-content: space-around
    @media (min-width: map-get($breakpoints, 'sm'))
      justify-content: space-around
    li
      div
        font-size: 12px
        line-height: 16px
        font-family: 'Manrope-Light'
        color: #7D7D7D
        @media (min-width: map-get($breakpoints, 'sm'))
          font-size: 13px
          line-height: 16px
        @media (min-width: map-get($breakpoints, 'lg'))
          font-size: 16px
          line-height: 24px

  &__title
    font-size: 18px
    line-height: 26px
    margin-bottom: 19px
    text-transform: uppercase
    font-family: 'Manrope-SemiBold'
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: left
      margin-bottom: 15px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 22px
      line-height: 32px
      margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 26px
      line-height: 39px
      margin-bottom: 45px
  &__table
    border: 1px solid #E1E1E1
    margin-bottom: 10px
    border-radius: 10px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 20px
      border-radius: 12px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 35px
      border-radius: 14px
    li
      padding: 10px 13px
      @media (min-width: map-get($breakpoints, 'sm'))
        padding: 6px
      @media (min-width: map-get($breakpoints, 'lg'))
        padding: 10px 15px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        padding: 20px 24px
      &:first-child
        border-right: 1px solid #E1E1E1

    div
      margin-bottom: 8px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        margin-bottom: 14px
    span
      display: block
      font-family: 'Manrope-SemiBold'
      color: #1776D4
      font-size: 15px
      line-height: 20px
      @media (min-width: map-get($breakpoints, 'sm'))
        font-size: 16px
        line-height: 20px
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 18px
        line-height: 22px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 22px
        line-height: 33px
  &__price
    margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
    ul
      justify-content: space-between
      li
        margin-right: 8px
        padding-left: 8px
        position: relative
        @media (min-width: map-get($breakpoints, 'lg'))
          margin-right: 20px
          padding-left: 14px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          margin-right: 32px
          padding-left: 16px
        &:before
          content: ""
          position: absolute
          width: 4px
          height: 4px
          background-color: #212121
          border-radius: 100%
          top: 6px
          left: 0
          @media (min-width: map-get($breakpoints, 'lg'))
            top: 9px
            width: 6px
            height: 6px
        &:last-child
          margin-right: 0
        div
          margin-bottom: 8px
          @media (min-width: map-get($breakpoints, 'sm'))
            margin-bottom: 3px
          @media (min-width: map-get($breakpoints, 'lg'))
            margin-bottom: 6px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            margin-bottom: 10px
        span
          font-size: 15px
          line-height: 20px
          font-family: 'Manrope-Medium'
          @media (min-width: map-get($breakpoints, 'lg'))
            font-size: 18px
            line-height: 24px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            font-size: 20px
            line-height: 30px
</style>
