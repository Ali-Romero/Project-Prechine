<template>
  <div class="ui-social">
    <ul class="ui-social__list">
      <li class="ui-social__item">
        <a href="#">
          <img
            src="@/assets/images/whatsapp.png"
            alt="whatsapp"
            width="30"
            height="30"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <img
            src="@/assets/images/telegram.png"
            alt="telegram"
            width="30"
            height="30"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
.ui-social
  &__list
    display: flex
    justify-content: center

  &__item
    margin-right: 10px
    &:last-child
      margin-right: 0
</style>
