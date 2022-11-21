<template>
  <section id="difference-section" ref="difference" class="difference-section">
    <div ref="nav" class="difference-section__nav d-none d-sm-block">
      <app-header></app-header>
    </div>
    <ui-wrapper class="difference-section__wrapper">
      <div class="difference-section__inner">
        <div class="difference-section__circle">
          <app-difference-circle-slider :slide="step" />
        </div>
        <div class="difference-section__header">
          <h2 class="difference-section__title title-secondary">
            Франшиза или обучение? Показываем разницу
          </h2>
          <div class="difference-section__title-info info">
            Объясняем, чем франшиза отличается от обучения бизнесу на
            маркетплейсах и показываем какие выгоды она даёт.
          </div>
        </div>
        <div ref="content" class="difference-section__content">
          <div class="difference-section__steps d-flex d-md-none">
            <div class="difference-section__step">
              <app-difference-title
                :title-difference-num="`0${currentStep.id}`"
                :title="currentStep.title"
              />
            </div>
          </div>
          <div ref="steps" class="difference-section__steps d-none d-md-block">
            <div
              v-for="item in steps"
              :key="item.id"
              class="difference-section__step"
              :class="{ 'difference-section__step--hidden': item.id !== step }"
            >
              <app-difference-title
                :title-difference-num="`0${item.id}`"
                :title="item.title"
              />
            </div>
          </div>
          <div class="difference-section__cards">
            <app-difference-card
              :black-text="currentStep.blackText"
              :white-text="currentStep.whiteText"
              :blue-text="currentStep.blueText"
            />
          </div>
          <div class="difference-section__cards-mobile-btn">
            <ui-nav-button prev @click="prev"></ui-nav-button>
            <ui-nav-button next @click="next"></ui-nav-button>
          </div>
        </div>
      </div>
      <div class="difference-section__bottom-info">
        Обеспечим пассивный доход на взаимовыгодных условиях:
        <span>
          вы инвестируете в товар, а всю работу с логистикой и закупкой
          выполняем мы.
        </span>
      </div>
    </ui-wrapper>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      step: 1,
      steps: [
        {
          id: 1,
          title: 'Поиск товара',
          blackText:
            'На старте и по запросу предоставляется список товаров, перспективных для продажи, со всеми данными: цена закупки, рекомендованная цена продажи и объём партии.',
          whiteText:
            'Раскроют принцип аналитики продаж на маркетплейсах и передадут список инструментов для самостоятельного поиска товаров под реализацию.',
          blueText: '',
        },
        {
          id: 2,
          title: 'Закупка товара',
          blackText:
            'Закупим товар через собственную компанию в Китае у проверенных поставщиков. Получите дополнительную оптовую скидку благодаря объёмам всей сети.',
          whiteText:
            'Обучитесь поиску товара в Китае и узнаете про принципы работы посредников, работающих с местными поставщиками. Найдёте и начнёте работать «вслепую» с новыми партнёрами.',
          blueText: '',
        },
        {
          id: 3,
          title: 'Складирование, упаковка и отправка товаров на маркетплейсы',
          blackText:
            'Предоставим в пользование собственный фулфилмент центр по партнёрским ценам. Товар будет приходить на склад франчайзинговой сети, маркироваться и отправляться в пункты выдачи после реализации.',
          whiteText:
            'Обучат работе с товаром и расскажут про регламенты маркетплейсов. Предложат 2 варианта работы: аренда собственного склада и наём работников или поиск стороннего фулфилмент центра.	',
          blueText:
            'Фулфилмент центр PriChina в 7 раз дешевле найма собственного штата и аренды склада, а также имеет тарифы ниже конкурентов.',
        },
        {
          id: 4,
          title: 'Продвижение товара',
          blackText:
            'По прибытию партии на склад проведём яркую фотосессию, опубликуем карточки товара и займёмся их продвижением.',
          whiteText:
            'Наймёте фотографа или скачаете фотографии из интернета, самостоятельно начнёте продвигать продукцию на маркетплейсах. Накапливание практического опыта в продажах повлечёт дополнительные затраты на рекламу и аренды площадей, где проставивается товар.',
          blueText: '',
        },
      ],
    }
  },
  computed: {
    currentStep() {
      return this.steps[this.step - 1]
    },
  },
  mounted() {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      this.$nextTick(() => {
        const timeline = gsap.getById('main-section-anim')
        timeline.to(
          this.$refs.nav,
          {
            opacity: 1,
            scale: 1,
            y: -20,
          },
          0.2
        )
      })
    })
    mm.add('(min-width: 1024px)', () => {
      this.$nextTick(() => {
        const $steps = this.$refs.steps

        const [firstStep, ...steps] = $steps.querySelectorAll(
          '.difference-section__step'
        )
        const lastStep = steps.pop()

        const timeline = gsap.getById('main-section-anim')

        timeline.fromTo(
          firstStep,
          {
            y: () => -($steps.offsetHeight / 2 + firstStep.offsetHeight / 2),
          },
          {
            y: () => -$steps.offsetHeight,
            onStart: () => {
              this.step = 1
            },
          }
        )

        steps.forEach((step, index) => {
          timeline.fromTo(
            step,
            {
              y: '-100%',
            },
            {
              y: () => -$steps.offsetHeight,
              onStart: () => {
                this.step = index + 2
              },
              onReverseComplete: () => {
                this.step = index + 1
              },
            },
            '-=65%'
          )
        })

        timeline.fromTo(
          lastStep,
          {
            y: '-100%',
          },
          {
            y: -($steps.offsetHeight / 2 + lastStep.offsetHeight / 2),
            onStart: () => {
              this.step = 4
            },
            onReverseComplete: () => {
              this.step = 3
            },
          },
          '-=65%'
        )
      })
    })
  },
  methods: {
    next() {
      this.step = this.step === this.steps.length ? 1 : this.step + 1
    },
    prev() {
      this.step = this.step === 1 ? this.steps.length : this.step - 1
    },
  },
}
</script>

<style lang="sass" scoped>
.difference-section
  background-color: #F4F4F4
  overflow: hidden
  position: relative
  top: -50px
  margin-bottom: -50px
  padding-top: 50px
  @media (min-width: map-get($breakpoints, 'sm'))
    position: unset
    top: auto
    margin-bottom: 0
    padding-top: 0
  .ui-wrapper
    ::v-deep
      max-width: 300px
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 990px
      @media (min-width: map-get($breakpoints, 'lg'))
        max-width: 1170px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 1482px
  &__wrapper
    position: relative
    z-index: 1
  &__circle
    position: absolute
    top: 319px
    right: 0
    left: -98px
    z-index: -1
    width: 160%
    @media (min-width: map-get($breakpoints, 'sm'))
      width: auto
      left: 0
      top: 202px
    @media (min-width: map-get($breakpoints, 'md'))
      left: auto
      top: 113px
      right: calc(100% - 130px)
      @media (max-height: 800px)
        top: 132px
    @media (min-width: map-get($breakpoints, 'lg'))
      right: calc(100% - 188px)
      top: 164px
      @media (max-height: 800px)
        top: 20px
        right: calc(100% - 170px)
    @media (min-width: map-get($breakpoints, 'xxxl'))
      right: calc(100% - 199px)
      top: 26px
      @media (max-height: 800px)
        right: calc(100% - 199px)
        top: 50px
    &:before
      content: ""
      position: absolute
      width: 130%
      height: 50%
      background-color: #F4F4F4
      bottom: 0
      left: -64px
      z-index: 1
      @media (min-width: map-get($breakpoints, 'sm'))
        left: auto
        width: 100%
      @media (min-width: map-get($breakpoints, 'md'))
        content: none
  &__header
    margin-bottom: 87px
    @media (min-width: map-get($breakpoints, 'md'))
      margin-bottom: 52px
    @media (min-width: map-get($breakpoints, 'lg'))
      @media (max-height: 800px)
        margin-bottom: 40px
  &__nav
    transform: scale(0.98)
    transition: 0.1s
    position: relative
    top: 20px
    z-index: 9
    opacity: 0
    ::v-deep
      .header-nav__item
        &:first-child
          pointer-events: none
          color: #FF840C
  &__inner
    padding: 82px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 0 0 100px 0
    @media (min-width: map-get($breakpoints, 'md'))
      padding: 0px 0 80px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 30px 0 100px 0
      @media (max-height: 800px)
        padding: 0 0 80px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 10px 0 133px 0
      @media (max-height: 800px)
        padding: 30px 0 80px 0

  &__title
    max-width: 460px
    margin: 0 auto 21px auto
    text-align: center
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 700px
      @media (max-height: 800px)
        margin: 0 auto 10px auto
        max-width: 510px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 864px
      @media (max-height: 800px)
        max-width: 600px

  &__title-info
    font-family: 'Manrope-Light'
    margin: 0 auto
    text-align: center
    color: #7D7D7D
    max-width: 462px
    font-family: 'Manrope-Light'
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 546px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 623px

  &__content
    @media (min-width: map-get($breakpoints, 'md'))
      padding-left: 157px
      display: flex
    @media (min-width: map-get($breakpoints, 'lg'))
      padding-left: 204px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding-left: 230px
  &__cards
    display: flex
    justify-content: center
    margin: 0 auto
    max-width: 300px
    width: 100%
    @media (min-width: map-get($breakpoints, 'md'))
      margin: 0
      display: block
      max-width: 507px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 594px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 740px
      @media (max-height: 800px)
        max-width: 640px

  &__steps
    justify-content: center
    align-items: center
    flex-direction: column
    margin-bottom: 24px
    @media (min-width: map-get($breakpoints, 'md'))
      margin-bottom: 0
      position: relative
      height: 344px
      flex-grow: 1
      overflow: hidden
      @media (max-height: 800px)
        height: 379px
    @media (min-width: map-get($breakpoints, 'lg'))
      height: 410px
      @media (max-height: 800px)
        height: 340px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      height: 450px
      @media (max-height: 800px)
        height: 380px
  &__step
    transition: opacity 0.5s

    @media (min-width: map-get($breakpoints, 'md'))
      width: 100%
      position: absolute
      left: 0
      top: 100%
      display: flex
      justify-content: center
      align-items: flex-start
    &--hidden
      opacity: 0
  &__cards-mobile-btn
    display: flex
    justify-content: center
    padding: 20px 0 0 0
    @media (min-width: map-get($breakpoints, 'md'))
      display: none
    ::v-deep
      .ui-nav-button
        width: 48px
        height: 48px
        &:first-child
          margin-right: 16px
  &__bottom-info
    position: relative
    z-index: 1
    font-family: 'Manrope-Light'
    text-align: center
    margin: 0 auto
    max-width: 885px
    font-size: 20px
    line-height: 30px
    padding: 0 0 79px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 0 0 120px 0
      font-size: 24px
      line-height: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 0 0 103px 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 885px
      font-size: 30px
      line-height: 45px
    &:before
      content: ""
      background: url("@/assets/images/info-icon.svg")
      background-repeat: no-repeat
      background-position: center
      background-size: cover
      position: absolute
      z-index: -1
      width: 60px
      height: 60px
      top: -44px
      left: 0
      right: 0
      margin: 0 auto
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 80px
        height: 80px
        top: -58px
    span
      font-size: 14px
      line-height: 21px
      display: block
      @media (min-width: map-get($breakpoints, 'sm'))
        font-size: 18px
        line-height: 26px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 22px
        line-height: 33px
</style>
