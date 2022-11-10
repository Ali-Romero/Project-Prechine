<template>
  <ui-input
    v-bind="$attrs"
    placeholder="bestpartner@prichina.ru"
    v-on="$listeners"
  >
    <template #icon>
      <ui-icon name="input-email"></ui-icon>
    </template>
  </ui-input>
</template>
