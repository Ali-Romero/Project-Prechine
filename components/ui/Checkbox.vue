<template>
  <label class="ui-checkbox" :class="classes">
    <input
      v-model="model"
      v-bind="$attrs"
      :type="radio ? 'radio' : 'checkbox'"
      :value="value"
      class="ui-checkbox__input"
      v-on="listeners"
    />
    <span class="ui-checkbox__icon">
      <ui-icon name="checkbox" />
    </span>
    <span class="ui-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'inputValue',
    event: 'input',
  },
  props: {
    /**
     * Значени v-model.
     */
    /* eslint-disable-next-line */
    inputValue: {
      required: true,
    },
    /**
     * Предназначено для чекбоксов с массивом в качестве значения и для radio.
     * Значение конкретного элемента.
     */
    /* eslint-disable-next-line */
    value: {
      default: '',
    },
    /**
     * checkbox type="radio"
     */
    radio: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      const { input, ...listeners } = this.$listeners

      return listeners
    },
    model: {
      get() {
        return this.inputValue
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    classes() {
      return {
        'ui-checkbox--radio': this.radio,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-checkbox
  display: flex
  align-items: flex-start
  cursor: pointer

  &__input
    margin: 0
    width: 0
    height: 0
    overflow: hidden
    visibility: hidden

  &__input:checked + &__icon
    border: none
    svg
      opacity: 1

  &__icon
    display: block
    width: 16px
    height: 16px
    border: 1px solid #7D7D7D
    border-radius: 2px
    margin-top: 2px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-top: 3px
      width: 20px
      height: 20px
    svg
      opacity: 0
      width: 16px
      height: 16px
      @media (min-width: map-get($breakpoints, 'lg'))
        width: 20px
        height: 20px

  &__label
    display: block
    margin-left: 6px
    font-size: 14px
    line-height: 16px
    @media (min-width: map-get($breakpoints, 'lg'))
      margin-left: 10px
      font-size: 18px
      line-height: 20px
    span
      font-size: 12px
      line-height: 14px
      @media (min-width: map-get($breakpoints, 'lg'))
        font-size: 14px
        line-height: 20px
</style>
