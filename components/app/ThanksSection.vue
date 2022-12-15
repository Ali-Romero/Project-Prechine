<template>
  <section class="thanks-section decor-bg">
    <ui-wrapper>
      <div class="thanks-section__inner">
        <h1 v-if="(name, city)" class="thanks-section__title">
          <span class="text-border">{{ name }},</span> благодарим Вас за заявку
          <br class="d-none d-sm-block" />
          на город <span class="text-border">{{ city }}</span> на франшизу
          PriChina ©
        </h1>
        <h1 v-else class="thanks-section__title">
          <span class="text-border">{{ name }},</span> благодарим Вас <br />
          за обращение в компанию PriChina ©
        </h1>
        <div class="thanks-section__description">
          Для обсуждения сотрудничества мы свяжемся с Вами в ближайшее время.
        </div>
        <div class="thanks-section__time">
          <ul>
            <li>
              <div class="thanks-section__time-icon">
                <ui-icon name="icon-time" />
              </div>
              <div class="thanks-section__time-text">
                График работы компании:
                <span class="font-bold"
                  >пн вт ср чт пт<span class="font-reg">сб вс</span></span
                >
              </div>
            </li>
            <li>
              <div class="thanks-section__time-icon">
                <ui-icon name="icon-calendar" />
              </div>
              <div class="thanks-section__time-text">
                По московскому времени:
                <span class="font-bold">с 9:00 до 18:00</span>
              </div>
            </li>
          </ul>
          <div class="thanks-section__time-info">
            Если Вы оставили заявку в нерабочее время или в выходной/праздничный
            день — <span>мы перезвоним Вам в ближайший рабочий день.</span>
          </div>
        </div>
        <div class="thanks-section__photo">
          <img
            src="@/assets/images/thanks-photo.png"
            alt="KazanExpress"
            width="410"
            height="479"
            loading="lazy"
          />
          <div class="thanks-section__photo-name">
            Айсылу <br />
            Хуснутдинова
            <div class="thanks-section__photo-founder">
              <span></span>
              <div>Основатель компании</div>
            </div>
          </div>
        </div>
        <div class="thanks-section__social">
          <ul>
            <li>
              <a
                class="thanks-section__social-link"
                href="https://kazanexpress.ru/prichina"
                target="_blank"
              >
                <img
                  src="@/assets/images/k-express.png"
                  alt="KazanExpress"
                  width="187"
                  height="24"
                  loading="lazy"
                />
                <span class="helper-info"
                  ><span class="helper-info__text"
                    >Действующий магазин на маркетплейсе:</span
                  ></span
                >
              </a>
            </li>
            <li>
              <a href="http://prichina.store" target="_blank">
                <span>Главный сайт бренда:</span>
                <img
                  src="@/assets/images/logo-main.svg"
                  alt="logo"
                  width="71"
                  height="58"
                  loading="lazy"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="thanks-section__backup">
          <router-link to="/">
            <span> Вернуться на основную страницу </span>
          </router-link>
        </div>
        <div class="thanks-section__slogan">
          <div class="thanks-section__slogan-text">
            Работаем вместе и зарабатываем тоже вместе
          </div>
          <div class="thanks-section__slogan-icon">
            <ui-icon name="quotes"></ui-icon>
          </div>
          <span class="thanks-section__slogan-circle"></span>
        </div>
      </div>
    </ui-wrapper>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      city: '',
    }
  },
  head() {
    return {
      title: this.name + ', спасибо, ваша заявка принята',
    }
  },
  mounted() {
    this.name = localStorage.getItem('lead_name')
    this.city = localStorage.getItem('city')
  },
}
</script>

<style lang="sass" scoped>
.thanks-section
  height: 100%
  position: relative
  z-index: 1
  display: flex
  justify-content: center
  align-items: center
  color: white
  background-color: #212121

  &__inner
    padding: 65px 0 70px 0
    position: relative

  &__title
    font-size: 24px
    line-height: 34px
    margin-bottom: 28px
    font-family: 'Manrope-ExtraBold'
    text-transform: uppercase
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 28px
      line-height: 42px
      margin-bottom: 39px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 32px
      line-height: 48px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 42px
      line-height: 62px

    span.text-border
      margin-right: 5px
      display: inline-block
      @media (min-width: map-get($breakpoints, 'sm'))
        display: inline
        margin-right: 10px
      @media (min-width: map-get($breakpoints, 'lg'))
        margin-right: 8px
      &:last-child
        @media (min-width: map-get($breakpoints, 'sm'))
          margin-left: 7px
      &::before
        padding: 0px 6px
        left: -11px
        top: -1px
        height: 93%
        @media (min-width: map-get($breakpoints, 'sm'))
          height: 93%
          padding: 0px 6px
          left: -9px
          top: 0
        @media (min-width: map-get($breakpoints, 'lg'))
          padding: 0px 7px
          left: -10px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          padding: 0px 10px
          left: -13px
          top: -1px

  &__description
    font-size: 16px
    line-height: 24px
    margin-bottom: 16px
    max-width: 346px
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: left
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 100%
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 20px
      line-height: 30px
      margin-bottom: 19px

  &__time
    background: white
    color: #212121
    border-radius: 24px
    padding: 18px 18px 16px 18px
    font-size: 14px
    line-height: 20px
    max-width: 333px
    margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 70px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 20px 20px 18px 20px
      max-width: 503px
      margin-bottom: 34px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 30px 30px 26px 30px
      font-size: 16px
      line-height: 24px
      max-width: 589px
      margin-bottom: 39px
    ul
      margin-bottom: 14px
      @media (min-width: map-get($breakpoints, 'lg'))
        display: flex
        align-items: center
      li
        display: flex
        margin-bottom: 2px
        @media (min-width: map-get($breakpoints, 'lg'))
          margin-right: 40px
        &:last-child
          margin-bottom: 0
          margin-right: 0

  &__time-icon
    margin-right: 14px

  &__time-text
    .font-bold
      display: block
      font-size: 17px
      line-height: 22px
      font-family: 'Manrope-Bold'
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 18px
        line-height: 27px
    .font-reg
      color: #7D7D7D
      margin-left: 5px

  &__time-info
    color: #7D7D7D
    font-size: 12px
    line-height: 18px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 14px
      line-height: 20px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 16px
      line-height: 24px
    span
      color: #212121

  &__team-title
    font-size: 17px
    line-height: 28px
    margin-bottom: 8px
    text-transform: uppercase
    font-family: 'Manrope-ExtraBold'
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: left
      font-size: 15px
      line-height: 24px
      margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 18px
      line-height: 28px
      margin-bottom: 18px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 20px
      line-height: 30px
      margin-bottom: 26px

  &__social
    margin-bottom: 174px
    font-family: 'Manrope-Light'
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 39px
    ul
      @media (min-width: map-get($breakpoints, 'lg'))
        display: flex
        align-items: center
      li
        margin-right: 38px
        a
          display: flex
          align-items: center
          span
            display: block
            margin-right: 16px
        &:first-child
          margin-bottom: 10px
          @media (min-width: map-get($breakpoints, 'lg'))
            margin-bottom: 0
          img
            width: 110px
            height: auto
            @media (min-width: map-get($breakpoints, 'sm'))
              width: 120px
            @media (min-width: map-get($breakpoints, 'lg'))
            @media (min-width: map-get($breakpoints, 'xxxl'))
              width: 160px
        &:last-child
          margin-right: 0
          img
            width: 60px
            height: auto
            @media (min-width: map-get($breakpoints, 'xxxl'))
              width: 71px
  &__social-link
    position: relative
    .helper-info
      position: absolute
      top: 0
      width: 0
      transform: scale(0)
      text-align: center
      font-size: 13px
      line-height: 15px
      transition: 0.3s
      padding: 0
      @media (min-width: map-get($breakpoints, 'xxxl'))
        font-size: 14px
        line-height: 16px

      &__text
        width: 270px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 290px
    &:hover
      .helper-info
        transform: scale(1)
        width: 270px
        top: -40px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 290px
        &__text
          width: 270px
          display: block
          background-color: #ffffff3d
          padding: 8px 6px 7px 6px
          border-radius: 5px 0 5px 0
          @media (min-width: map-get($breakpoints, 'xxxl'))
            width: 290px
  &__backup
    font-size: 15px
    line-height: 22px
    text-transform: uppercase
    color: #FF840C
    text-decoration: underline
    font-family: 'Manrope-Bold'
    text-align: center
    position: relative
    z-index: 6
    @media (min-width: map-get($breakpoints, 'sm'))
      text-align: left
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 16px
      line-height: 24px

  &__slogan
    position: absolute
    bottom: 0
    z-index: 2
    @media (min-width: map-get($breakpoints, 'sm'))
      left: 372px
      padding: 0 0 0 28px
    @media (min-width: map-get($breakpoints, 'lg'))
      left: 384px
      padding: 0 0 0 173px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      left: 545px

  &__slogan-text
    font-family: 'Manrope-Light'
    font-size: 20px
    line-height: 30px
    max-width: 300px
    margin-bottom: 10px
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 23px
      line-height: 36px
      margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      text-align: left
      max-width: 197px
      margin-bottom: 29px
    @media (min-width: map-get($breakpoints, 'xxxxl'))
      font-size: 28px
      line-height: 42px
      max-width: 234px
      margin-bottom: 31px

  &__slogan-icon
    width: 40px
    height: 40px
    margin: 0 auto
    margin-bottom: 137px
    border-radius: 100%
    background-color: #FF840C
    display: flex
    justify-content: center
    align-items: center
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 60px
      height: 60px
      margin: 0 auto
      margin-bottom: 54px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin: 0
      margin-bottom: 76px
    @media (min-width: map-get($breakpoints, 'xxxxl'))
      margin-bottom: 107px
      width: 64px
      height: 64px
    svg
      width: 15px
      height: 15px
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 24px
        height: 21px

  &__slogan-circle
    position: absolute
    border-radius: 100%
    border: 1px solid  rgba(244, 244, 244, 0.3)
    left: -113px
    pointer-events: none
    z-index: -1
    width: 529px
    height: 529px
    top: 92px
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 560px
      height: 560px
      top: 124px
      left: -98px
    @media (min-width: map-get($breakpoints, 'lg'))
      left: 0
      top: 160px
    @media (min-width: map-get($breakpoints, 'xxxxl'))
      width: 619px
      height: 619px
      top: 172px

  &__photo
    position: relative
    margin-bottom: 46px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
      position: absolute
      right: 70px
      top: 160px
      z-index: 4
    @media (min-width: map-get($breakpoints, 'lg'))
      right: 70px
      top: 127px
    @media (min-width: map-get($breakpoints, 'xxxxl'))
      right: 0
      top: 127px
    img
      width: 224px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 290px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 306px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 360px
      @media (min-width: map-get($breakpoints, 'xxxxl'))
        width: 410px

  &__photo-name
    background: #FFFFFF
    position: absolute
    color: #212121
    font-family: 'Manrope-SemiBold'
    border-radius: 12px
    width: 183px
    height: 93px
    font-size: 17px
    line-height: 22px
    padding: 12px
    bottom: 14px
    right: 0
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 191px
      height: 101px
      font-size: 18px
      line-height: 24px
      padding: 14px
      bottom: 44px
      right: -42px
    @media (min-width: map-get($breakpoints, 'lg'))
      width: 206px
      height: 112px
      font-size: 20px
      line-height: 28px
      padding: 15px
      bottom: 81px
      right: -59px
    @media (min-width: map-get($breakpoints, 'xxxxl'))
      width: 240px
      height: 142px
      font-size: 24px
      line-height: 31px
      padding: 20px
      bottom: 81px
      right: -82px

  &__photo-founder
    font-family: 'Manrope-Regular'
    color: #7D7D7D
    display: flex
    align-items: center
    font-size: 13px
    line-height: 18px
    margin-top: 8px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 14px
      line-height: 20px
      margin-top: 10px
    @media (min-width: map-get($breakpoints, 'xxxxl'))
      font-size: 16px
      line-height: 24px
      margin-top: 16px
    span
      display: block
      border-radius: 100%
      width: 15px
      height: 15px
      border: 4px solid #FF840C
      margin-right: 6px
      @media (min-width: map-get($breakpoints, 'sm'))
        margin-right: 10px
      @media (min-width: map-get($breakpoints, 'xxxxl'))
        width: 20px
        height: 20px
        border: 6px solid #FF840C
        margin-right: 10px
</style>
