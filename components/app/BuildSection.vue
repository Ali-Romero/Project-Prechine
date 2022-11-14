<template>
  <section class="build-section">
    <ui-wrapper>
      <div class="build-section__inner">
        <h2 class="build-section__title title-secondary">
          Строим совместный бизнес
        </h2>
        <div class="build-section__title-info">
          Отвечаем на важные вопросы: почему делимся идеями товаров и кому
          подходит бизнес.
        </div>
        <div class="build-section__scroll">
          <ul class="build-section__scroll-list">
            <li class="build-section__scroll-item">
              <app-advantage img="advantage-1.png">
                <template #icon>
                  <ui-icon name="icon-handshake"></ui-icon>
                </template>
                <template #title>
                  Мы делимся авторскими наработками, потому что франшиза
                  PriChina —
                </template>
                <template #description>
                  это сочетание товарной инфраструктуры (подбор, логистика,
                  хранение и упаковка) и предпринимателей, которые зарабатывают
                  от инвестиций в подобранными товары.
                </template>
              </app-advantage>
            </li>
            <li class="build-section__scroll-item">
              <app-advantage img="advantage-2.png" second>
                <template #icon>
                  <ui-icon name="icon-people"></ui-icon>
                </template>
                <template #title>
                  Сотрудничество будет привлекательным для:
                </template>
                <template #description>
                  <ul>
                    <li>Инвесторов, которые ищут пассивный доход.</li>
                    <li>
                      Предпринимателей или фрилансеров, которые ищут удаленную
                      формат бизнеса.
                    </li>
                    <li>
                      Любителей путешествовать и жить в курортных странах,
                      которые хотят создать активы для заработка.
                    </li>
                  </ul>
                </template>
              </app-advantage>
            </li>
          </ul>
        </div>
        <div class="build-section__bottom-description">
          Подобный принцип работы применяют и сами маркетплейсы, которые
          предлагают услуги площадки взамен на комиссию с товара, вместо того,
          чтобы торговать на ней самостоятельно.
        </div>
      </div>
    </ui-wrapper>
  </section>
</template>

<style lang="sass" scoped>
.build-section
  color: #212121
  background-color: #f4f4f4
  border-radius: 0px 0px 60px 60px
  font-family: 'Manrope-Light'
  @media (min-width: map-get($breakpoints, 'lg'))
    border-radius: 0px 0px 80px 80px

  &__inner
    padding: 81px 0 60px 0
    @media (min-width: map-get($breakpoints, 'lg'))
      padding: 92px 0 90px 0

  &__title
    margin-bottom: 14px
    text-align: center
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 21px

  &__title-info
    text-align: center
    color: #A0A0A0
    font-size: 16px
    line-height: 24px
    max-width: 250px
    margin: 0 auto
    margin-bottom: 40px
    @media (min-width: map-get($breakpoints, 'sm'))
      max-width: 100%
      margin: 0
      margin-bottom: 52px
    @media (min-width: map-get($breakpoints, 'lg'))
      font-size: 18px
      line-height: 28px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      font-size: 22px
      line-height: 33px

  &__scroll
    margin-bottom: 60px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-bottom: 70px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-bottom: 90px

  &__scroll-list
    @media (min-width: map-get($breakpoints, 'sm'))
      display: flex
      flex-wrap: nowrap

  &__scroll-item
    margin-bottom: 50px
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 100%
      margin-right: 37px
      margin-bottom: 0
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-right: 96px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      margin-right: 160px
    &::last-child
      margin-right: 0

  &__bottom-description
    margin: 0 auto
    text-align: center
    max-width: 582px
    font-size: 18px
    line-height: 26px
    @media (min-width: map-get($breakpoints, 'lg'))
      max-width: 646px
      font-size: 20px
      line-height: 30px
    @media (min-width: map-get($breakpoints, 'xxxl'))
      max-width: 978px
      font-size: 30px
      line-height: 45px
</style>
