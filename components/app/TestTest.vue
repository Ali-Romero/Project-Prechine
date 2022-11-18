<template>
  <div ref="inner" class="test-test">
    <div ref="list" class="test-test__wrap">
      <div class="test-test__item" style="background: lime;">
        11111111
      </div>
      <div class="test-test__item" style="background: pink;">
        22222
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$gsap.getById('scroll-sections').to(
        this.$refs.list,
        {
          x: () => -this.$refs.list.firstChild.offsetWidth,
        },
        -0.5
      )
    })
  },
}
</script>

<style lang="sass" scoped>
.test-test
  &__wrap
    max-width: 800px
    margin: auto
    display: flex
    flex-wrap: nowrap

  &__item
    height: 800px
    min-width: 800px
</style>
