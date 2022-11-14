<template>
  <section class="cases-section">
    <ui-wrapper>
      <div class="cases-section__inner">
        <h2 class="cases-section__title title-secondary">Реальные кейсы</h2>
        <div class="cases-section__title-info info">
          Для всех партнёров проводится постоянный мониторинг спроса товаров на
          маркетплейсах, на основе которого готовится подборка перспективных
          позиций на продажу.
        </div>
        <div class="cases-section__content">
          <div class="cases-section__mini">
            <div class="product-mini">
              <div class="product-mini__image">
                <ui-image
                  src="multi-logo.png"
                  alt="image"
                  width="150"
                  height="56"
                  sizes="xxs:108 sm:120 lg:114 xxxl:150px"
                ></ui-image>
              </div>
              <div class="product-mini__title">
                На чём сегодня зарабатывают партнёры PriChina
              </div>
              <div class="d-none d-sm-block">
                <div class="product-mini__cases-list">
                  <div
                    v-for="product in products"
                    :key="product.thumbnail"
                    class="product-mini__cases-item"
                  >
                    <app-case-mini :image="product.thumbnail"></app-case-mini>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cases-section__product">
            <app-product-card
              :title="products[0].title"
              :image="products[0].image"
              :amount="products[0].amount"
              :profit="products[0].profit"
              :price-purchase="products[0].pricePurchase"
              :price-sale="products[0].priceSale"
              :markup="products[0].markup"
            />
            <div class="cases-section__nav-button">
              <div class="cases-section__nav-button-prev">
                <ui-nav-button prev></ui-nav-button>
              </div>
              <div class="cases-section__nav-button-next">
                <ui-nav-button next></ui-nav-button>
              </div>
            </div>
          </div>
        </div>
        <div class="cases-section__bottom-info">
          <div class="cases-section__bottom-img">
            <ui-image
              src="cases-bottom-img.jpg"
              alt="image"
              width="652"
              height="312"
              sizes="xxs:326px lg:490 xxxl:652px"
            ></ui-image>
          </div>
          <div class="cases-section__bottom-text">
            Каждый партнёр получил на старте вводное обучение и список ходовых
            товаров на выбор, и за месяц вышел на продажи.
          </div>
        </div>
      </div>
    </ui-wrapper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          thumbnail: require('@/assets/images/product-mini-1.jpg'),
          title: 'Плащ дождевик для крупных и средних собак',
          image: 'product-main-1.jpg',
          amount: '544 за месяц',
          profit: '451 106 рублей',
          pricePurchase: '356 рублей',
          priceSale: '1 084 рублей',
          markup: '254%',
        },
        {
          thumbnail: require('@/assets/images/product-mini-2.jpg'),
          title: 'Набор дозаторов для ванной',
          image: 'product-main-2.jpg',
          amount: '1 559 за месяц',
          profit: '1 948 961 рублей',
          pricePurchase: '430 рублей',
          priceSale: '1 059 рублей',
          markup: '246%',
        },
        {
          thumbnail: require('@/assets/images/product-mini-3.jpg'),
          title: 'Подшлемник балаклава',
          image: 'product-main-3.jpg',
          amount: '1 054 за месяц',
          profit: '498 634 рублей',
          pricePurchase: '80 рублей',
          priceSale: '406 рублей',
          markup: '507%',
        },
        {
          thumbnail: require('@/assets/images/product-mini-4.jpg'),
          title: 'Пакеты фасовочные для вакууматора',
          image: 'product-main-4.jpg',
          amount: '1 133 за месяц',
          profit: '1 272 425 рублей',
          pricePurchase: '307 рублей',
          priceSale: '968 рублей',
          markup: '315%',
        },
        {
          thumbnail: require('@/assets/images/product-mini-5.jpg'),
          title: 'Органайзер для хранения одежды и вещей',
          image: 'product-main-5.jpg',
          amount: '380 за месяц',
          profit: '470 106 рублей',
          pricePurchase: '312 рублей',
          priceSale: '1 084 рублей',
          markup: '347%',
        },
        {
          thumbnail: require('@/assets/images/product-mini-6.jpg'),
          title: 'Лежанка гамак для кошек',
          image: 'product-main-6.jpg',
          amount: '806 за месяц',
          profit: '661 100 рублей',
          pricePurchase: '249 рублей',
          priceSale: '779 рублей',
          markup: '312%',
        },
        {
          thumbnail: require('@/assets/images/product-mini-7.jpg'),
          title: 'Жилет для собак',
          image: 'product-main-7.jpg',
          amount: '690 за месяц',
          profit: '453 784 рублей',
          pricePurchase: '119 рублей',
          priceSale: '714 рублей',
          markup: '600%',
        },
        {
          thumbnail: require('@/assets/images/product-mini-8.jpg'),
          title: 'Рубашка медицинская женская',
          image: 'product-main-8.jpg',
          amount: '827 за месяц',
          profit: '1 572 331 рублей',
          pricePurchase: '489 рублей',
          priceSale: '1 752 рублей',
          markup: '358%',
        },
        {
          thumbnail: require('@/assets/images/product-mini-9.jpg'),
          title: 'Спортивные женские шорты',
          image: 'product-main-9.jpg',
          amount: '3 560 за месяц',
          profit: '4 912 800 рублей',
          pricePurchase: '456 рублей',
          priceSale: '1 117 рублей',
          markup: '244%',
        },
        {
          thumbnail: require('@/assets/images/product-mini-10.jpg'),
          title: 'Утягивающий корсет',
          image: 'product-main-10.jpg',
          amount: '3 155 за месяц',
          profit: '4 388 364 рублей',
          pricePurchase: '312 рублей',
          priceSale: '1 492 рублей',
          markup: '478%',
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.cases-section
  color: #212121
  &__inner
    padding: 92px 0 0 0
  &__title
    margin-bottom: 21px
    text-align: center
  &__title-info
    font-family: 'Manrope-Light'
    max-width: 704px
    margin: 0 auto 48px auto
    color: #7D7D7D
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 836px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 963px
  &__content
    margin-bottom: 85px
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      justify-content: space-between
  &__mini
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 100%
      max-width: 243px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 348px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 440px
  &__product
    max-width: 486px
    width: 100%
    position: relative
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 665px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 933px
  &__bottom-info
    display: flex
    align-items: center
    justify-content: space-between
    flex-direction: column-reverse
    @media (min-width: map-get($breakpoints, 'sm'))
      flex-direction: row
  &__bottom-img
    ::v-deep
      img
        width: 326px
        height: auto
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 490px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 652px
  &__bottom-text
    font-family: 'Manrope-Light'
    font-size: 18px
    line-height: 24px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 19px
      line-height: 26px
      max-width: 402px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 24px
      line-height: 35px
      max-width: 520px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 30px
      line-height: 45px
      max-width: 657px
  &__nav-button
    display: flex
    justify-content: center
    @media (min-width: map-get($breakpoints, 'sm'))
      justify-content: flex-start
      position: absolute
      bottom: 0px
      left: 196px
    @media (min-width: map-get($breakpoints, 'lg'))
      bottom: 4px
      left: 298px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      bottom: 45px
      left: 500px
  &__nav-button-prev
    margin-right: 10px
  // &__nav-button-next
.product-mini
  font-size: 17px
  line-height: 26px
  font-family: 'Manrope-Light'
  text-align: center
  @media (min-width: map-get($breakpoints, 'lg'))
    text-align: left
    font-size: 22px
    line-height: 30px
  @media (min-width: map-get($breakpoints, 'xxxl'))
    font-size: 30px
    line-height: 42px
  &__image
    margin-bottom: 7px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 5px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 16px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 21px
    ::v-deep
      img
        width: 90px
        height: auto
        margin: 0 auto
        @media (min-width: map-get($breakpoints, 'sm'))
          margin: 0
        @media (min-width: map-get($breakpoints, 'lg'))
          width: 114px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 150px

  &__title
    margin-bottom: 29px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 26px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 34px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 135px
  // &__cases
  &__cases-list
    display: flex
    flex-wrap: wrap
    justify-content: space-between
  &__cases-item
    margin-bottom: 4px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 6px
</style>
