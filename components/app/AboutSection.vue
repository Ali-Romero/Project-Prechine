<template>
  <section id="about-section" class="about-section">
    <div ref="list" class="about-section__bg decor-bg">
      <ui-wrapper>
        <div class="about-section__inner">
          <div class="about-section__box">
            <div class="about-section__info">
              <h2 class="about-section__title title-secondary">
                Продала машину, <br />
                чтобы стать
                <br class="d-none d-sm-block" />
                миллионером
              </h2>
              <div class="about-section__info-part-1">
                Это шутка :) Не было ни машины, ни больших денег для закупки
                крупной партии товаров. Поэтому пришлось
                <span>пройти путь длиной в 5 лет,</span>
                накапливая капитал, чтобы мои обороты выросли до
                полномасштабного бизнеса.
              </div>
              <div class="about-section__info-part-2">
                <div>
                  С улыбкой вспоминаю, как надо мной подшучивал муж «семья
                  засыпает — просыпается предприниматель», видя, как я ночами
                  разбираю грязные коробки, штрих-кодирую и упаковываю товар,
                  создаю карточки.
                </div>
                <div>
                  Но сегодня, когда получилось выстроить все процессы и собрать
                  команду сильных экспертов, я получаю удовольствие от того, что
                  могу поделиться с людьми нашей франшизой, которая
                  действительно даёт возможность зарабатывать!
                </div>
              </div>
            </div>
            <div class="about-section__photo">
              <img
                src="@/assets/images/about-photo.png"
                alt="KazanExpress"
                width="495"
                height="756"
                loading="lazy"
                class="d-block"
              />
              <div class="about-section__photo-container">
                <div class="about-section__photo-info">
                  <span></span>
                  <div>
                    Действующий продавец на маркетплейсах и владелец
                    франчайзинговой сети с собственным фулфилмент сервисом
                  </div>
                </div>
                <div class="about-section__photo-name">Айсылу Хуснутдинова</div>
              </div>
              <div class="about-section__photo-bg-image">
                <img
                  src="@/assets/images/about-photo-bg.png"
                  alt="KazanExpress"
                  width="591"
                  height="501"
                  loading="lazy"
                  class="d-block"
                />
              </div>
            </div>
          </div>
        </div>
      </ui-wrapper>
    </div>
    <div class="about-section__btn-content">
      <ui-wrapper>
        <div class="about-section__btn-container">
          <div class="about-section__btn-description">
            Узнайте подробнее о франшизе и фулфилмент сервисе
          </div>
          <div class="about-section__btn" @click.prevent="modal = true">
            <ui-button fluid
              >Подробнее о франшизе
              <template #icon>
                <ui-icon name="arrow-btn" />
              </template>
            </ui-button>
          </div>
        </div>
      </ui-wrapper>
      <ui-modal v-model="modal">
        <app-feedback-modal-call />
      </ui-modal>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    }
  },
}
</script>

<style lang="sass" scoped>
.about-section
  color: white
  border-radius: 0px 0px 60px 60px
  padding: 0 0 64px 0
  position: relative
  z-index: 4
  @media (min-width: map-get($breakpoints, 'sm'))
    padding: 0 0 90px 0
  @media (min-width: map-get($breakpoints, 'lg'))
    border-radius: 0px 0px 80px 80px
  ::v-deep
    background-color: white
  &::before
    content: ""
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    background: #F4F4F4
    border-radius: 0px 0px 60px 60px
    z-index: -1
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 0 0 90px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      border-radius: 0px 0px 80px 80px
  &__bg
    max-width: 440px
    margin: 0 auto 60px auto
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 785px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 1193px
      margin: 0 auto 70px auto
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 1496px
      margin: 0 auto 80px auto
    @media (min-width: map-get($breakpoints, 'xxxxxxl'))
      max-width: 1640px
    @media (min-width: map-get($breakpoints, 'xxxxxxxl'))
      max-width: 1829px
      margin: 0 auto 90px auto
    &:after
      content: ""
      position: absolute
      width: 100%
      height: 100%
      background: linear-gradient(69.05deg, #065FBD 7.95%, #278EEC 79.6%, #278EEC 79.6%)
      z-index: -2
      border-radius: 50px
      left: 0
      top: 0
      pointer-events: none
      border-radius: 60px
      @media (min-width: map-get($breakpoints, 'lg'))
        border-radius: 60px
    &:before
      opacity: 0.2

  &__inner
    position: relative
    @media (min-width: map-get($breakpoints, 'sm'))
      position: unset

  &__box
    padding: 81px 0 0 0
    border-radius: 50px
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 66px 0 0 0
      display: flex
      align-items: center
    @media (min-width: map-get($breakpoints, 'lg'))
      align-items: flex-end
      padding: 80px 0 0 0
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 93px 0 0 0

  &__info
    max-width: 373px
    padding: 0 0 85px 0
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-right: 14px
      padding: 0 0 70px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 470px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 509px
      margin-right: 34px
      padding: 0 0 109px 0

  &__title
    margin-bottom: 21px

  &__info-part-1
    font-size: 16px
    line-height: 23px
    margin-bottom: 387px
    font-family: 'Manrope-Light'
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 20px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 19px
      line-height: 28px
      margin-bottom: 40px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 22px
      line-height: 33px
      margin-bottom: 50px
    span
      @media (min-width: map-get($breakpoints, 'sm'))
        font-family: 'Manrope-Bold'

  &__info-part-2
    font-size: 14px
    line-height: 18px
    max-width: 399px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 15px
      line-height: 21px
      max-width: 399px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 16px
      line-height: 24px
      max-width: 428px
    div
      margin-bottom: 10px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        margin-bottom: 14px
      &:last-child
        margin-bottom: 0

  &__photo
    position: absolute
    z-index: 1
    top: 378px
    left: -10px
    @media (min-width: map-get($breakpoints, 'sm'))
      position: relative
      top: auto
      left: auto
    img
      width: 180px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 197px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 377px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 495px

  &__photo-container
    position: absolute
    bottom: -49px
    right: -120px
    display: flex
    flex-direction: column-reverse
    align-items: flex-end
    @media (min-width: map-get($breakpoints, 'sm'))
      bottom: -70px
      right: -164px
    @media (min-width: map-get($breakpoints, 'lg'))
      display: block
      bottom: 39px
      right: -260px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      bottom: 160px
      right: -351px
    @media (min-width: map-get($breakpoints, 'xxxxxxl'))
      bottom: 105px
      right: -358px

  &__photo-info
    display: flex
    background: #FFFFFF
    color: #7D7D7D
    border-radius: 14px
    width: 292px
    height: 80px
    font-size: 12px
    line-height: 18px
    padding: 12px
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 362px
      height: 92px
      font-size: 15px
      line-height: 21px
      padding: 15px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 18px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      width: 415px
      height: 112px
      font-size: 16px
      line-height: 24px
      padding: 20px
      margin-bottom: 36px
    span
      display: block
      width: 14px
      height: 14px
      border: 4px solid #FF840C
      border-radius: 100%
      margin-right: 8px
      margin-top: 4px
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 16px
        height: 16px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        margin-top: 0
        width: 24px
        height: 24px
        margin-right: 16px
        border: 6px solid #FF840C
    div
      max-width: 246px
      @media (min-width: map-get($breakpoints, 'sm'))
        max-width: 307px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 335px

  &__photo-name
    font-family: 'Manrope-SemiBold'
    font-size: 16px
    line-height: 21px
    max-width: 114px
    margin-bottom: 24px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 22px
      line-height: 29px
      max-width: 155px
      margin-bottom: 30px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 29px
      line-height: 38px
      max-width: 214px
      margin-left: 60px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 36px
      line-height: 47px
      max-width: 259px
      margin-left: 60px

  &__photo-bg-image
    position: absolute
    z-index: -1
    top: -17px
    right: -153px
    @media (min-width: map-get($breakpoints, 'sm'))
      right: -153px
      top: -24px
    @media (min-width: map-get($breakpoints, 'lg'))
      top: 63px
      right: -258px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      top: -2px
      right: -317px
    @media (min-width: map-get($breakpoints, 'xxxxxxl'))
      top: -11px
      right: -446px
    img
      width: 207px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 226px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 366px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 464px
      @media (min-width: map-get($breakpoints, 'xxxxxxl'))
        width: 581px

  &__btn-container
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      justify-content: center
      align-items: center

  &__btn-description
    width: 100%
    max-width: 341px
    font-size: 22px
    line-height: 30px
    margin-bottom: 30px
    text-transform: uppercase
    color: #212121
    font-family: 'Manrope-ExtraBold'
    text-align: center
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0
      text-align: left
      max-width: 361px
      font-size: 20px
      line-height: 33px
      margin-right: 38px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 483px
      font-size: 27px
      line-height: 41px
      margin-right: 76px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 729px
      font-size: 40px
      line-height: 56px
      margin-right: 160px

  &__btn
    width: 100%
    max-width: 300px
    height: 70px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 340px
      height: 70px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 383px
      height: 87px
</style>
