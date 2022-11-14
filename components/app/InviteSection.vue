<template>
  <section class="invite-section">
    <ui-wrapper>
      <div class="invite-section__inner">
        <div class="invite-section__row">
          <div class="invite-section__col">
            <h2 class="invite-section__title">
              <span class="title">
                Посмотрите <br />
                на бизнес лично:
              </span>
              <span class="subtitle">
                приезжайте <span class="text-border"> на экскурсию </span><br />
                в Казань или проверьте офис
                <span class="text-border"> по видеосвязи</span>
              </span>
            </h2>
            <div class="invite-section__founder">
              <div class="invite-section__founder-photo">
                <img
                  src="@/assets/images/invite-founder-photo.png"
                  alt="founder"
                  width="120"
                  height="120"
                  loading="lazy"
                  class="d-block"
                />
                <span>
                  <ui-icon name="quotes" />
                </span>
              </div>
              <div class="invite-section__founder-description">
                Я, Айсылу Хуснутдинова, приглашаю познакомиться с работой
                фулфилмент центра лично или по видеосвязи
              </div>
            </div>
          </div>
          <div class="invite-section__col">
            <div class="invite-section__table-info">
              <div class="invite-section__table-info-image">
                <img
                  src="@/assets/images/invite-section-image.png"
                  alt="founder"
                  width="698"
                  height="462"
                  loading="lazy"
                  class="d-block"
                />
              </div>
              <div class="invite-section__table-info-content">
                <div class="invite-section__table-info-title">
                  Программа <br d-sm-none />
                  презентации:
                </div>
                <ul>
                  <li>
                    <span></span>
                    <div>Представление центра.</div>
                  </li>
                  <li>
                    <span></span>
                    <div>
                      Ознакомление с работой работников склада — процессом
                      приёма, сортировки и маркировки товара.
                    </div>
                  </li>
                  <li>
                    <span></span>
                    <div>
                      Демонстрация внутренней статистики: CRM-системы, рекламны
                      х кабинетов и бухгалтерской отчётности.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="invite-section__feedback">
          <app-feedback></app-feedback>
        </div>
      </div>
    </ui-wrapper>
  </section>
</template>

<style lang="sass" scoped>
.invite-section
  color: white
  background: url("@/assets/images/invite-section-bg.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover

  &__inner
    padding: 169px 0 90px 0

  &__row
    margin-bottom: 34px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 60px
      display: flex
      align-items: flex-end

  &__col
    &:first-child
      @media (min-width: map-get($breakpoints, 'sm'))
        margin-right: 48px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        margin-right: 92px

  &__title
    margin-bottom: 40px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 56px
    span.text-border
      padding: 5px
    span.subtitle
      display: block
      font-weight: 400
      font-size: 23px
      line-height: 27px
      max-width: 300px
      @media (min-width: map-get($breakpoints, 'sm'))
        font-size: 30px
        line-height: 39px
        max-width: 408px
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 50px
        line-height: 59px
        max-width: 651px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        max-width: 700px
        font-size: 54px
        line-height: 68px
    span.text-border
      margin-left: 2px
      display: inline-block
      @media (min-width: map-get($breakpoints, 'sm'))
        margin-left: 10px
      @media (min-width: map-get($breakpoints, 'lg'))
        margin-left: 8px
      &::before
        padding: 0px 1px
        left: -4px
        top: 5px
        height: 71%
        @media (min-width: map-get($breakpoints, 'sm'))
          height: 82%
          padding: 0px 6px
          left: -7px
          top: 5px
        @media (min-width: map-get($breakpoints, 'lg'))
          padding: 0px 7px
          left: -10px
          top: 8px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          left: -9px
          top: 8px

  &__founder
    display: flex
    align-items: center
    margin-bottom: 87px
    @media (min-width: map-get($breakpoints, 'sm'))
      margin-bottom: 0

  &__founder-photo
    margin-right: 21px
    position: relative
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-right: 46px
    img
      width: 70px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 90px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 120px
    span
      position: absolute
      background: #FF840C
      display: flex
      justify-content: center
      align-items: center
      border-radius: 100%
      width: 30px
      height: 30px
      right: -5px
      bottom: -5px
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 38px
        height: 38px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 40px
        height: 40px
        right: -8px
        bottom: -5px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 48px
        height: 48px
        right: -8px
        bottom: -5px
      svg
        width: 14px
        height: 12px
        @media (min-width: map-get($breakpoints, 'sm'))
          width: 22px
          height: 16px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          width: 24px
          height: 21px

  &__founder-description
    max-width: 209px
    font-size: 15px
    line-height: 19px
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 296px
      font-size: 16px
      line-height: 21px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 374px
      font-size: 20px
      line-height: 26px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 458px
      font-size: 24px
      line-height: 36px

  &__table-info
    position: relative

  &__table-info-content
    position: relative
    z-index: 3
    background: #212121
    color: white
    width: 100%
    padding: 24px 26px
    max-width: 300px
    min-height: 244px
    border-radius: 16px
    @media (min-width: map-get($breakpoints, 'sm'))
      padding: 18px 12px
      max-width: 285px
      min-height: 246px
      border-radius: 24px
      margin-bottom: 10px
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 24px
      max-width: 383px
      min-height: 276px
      border-radius: 24px
      margin-bottom: 10px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      padding: 30px
      max-width: 383px
      min-height: 309px
      margin-bottom: 10px
    ul
      li
        display: flex
        font-family: 'Manrope-Light'
        font-size: 12px
        line-height: 18px
        margin-bottom: 6px
        @media (min-width: map-get($breakpoints, 'sm'))
          font-size: 14px
          line-height: 20px
        @media (min-width: map-get($breakpoints, 'lg'))
          font-size: 15px
          line-height: 23px
          margin-bottom: 10px
        @media (min-width: map-get($breakpoints, 'xxxl'))
          font-size: 16px
          line-height: 24px
          margin-bottom: 14px
        &:last-child
          margin-bottom: 0
        span
          display: block
          width: 8px
          height: 8px
          background-color: #1776D4
          border-radius: 100%
          margin: 6px 6px 0 0
          @media (min-width: map-get($breakpoints, 'lg'))
            margin: 6px 14px 0 0
            width: 10px
            height: 10px
        div
          max-width: 224px
          @media (min-width: map-get($breakpoints, 'sm'))
            max-width: 245px
          @media (min-width: map-get($breakpoints, 'lg'))
            max-width: 291px
          @media (min-width: map-get($breakpoints, 'xxxl'))
            max-width: 297px

  &__table-info-title
    font-family: 'Manrope-SemiBold'
    text-transform: uppercase
    font-size: 16px
    line-height: 24px
    margin-bottom: 10px
    @media (min-width: map-get($breakpoints, 'sm'))
      font-size: 17px
      line-height: 25px
      margin-bottom: 12px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 20px
      line-height: 28px
      margin-bottom: 16px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 22px
      line-height: 33px
      margin-bottom: 20px

  &__table-info-image
    position: absolute
    z-index: 4
    bottom: 168px
    left: 162px
    @media (min-width: map-get($breakpoints, 'sm'))
      bottom: 226px
      left: 140px
    @media (min-width: map-get($breakpoints, 'lg'))
      z-index: 2
      left: 105px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      bottom: 69px
      left: 95px
    img
      width: 169px
      height: auto
      @media (min-width: map-get($breakpoints, 'sm'))
        width: 189px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 626px
      @media (min-width: map-get($breakpoints, 'xxxl'))
        width: 698px
</style>
