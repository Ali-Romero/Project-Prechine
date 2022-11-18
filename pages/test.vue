<template>
  <div>
    <div v-for="num in [4, 5, 6]" :key="num" :class="`test${num}`">
      {{ `${num}`.repeat(20) }}
    </div>

    <app-scroll-sections>
      <template #primary>
        <app-test-test />
      </template>
      <template #secondary>
        <div class="test1">
          {{ 'LOOK AT MEEEEEEEEEEEEEEEEEEEEE'.repeat(20) }}
        </div>
      </template>
    </app-scroll-sections>

    <div v-for="num in [1, 2, 3]" :key="num" :class="`test${num - 1}`">
      {{ `${num}`.repeat(20) }}
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
div
  font-size: 40px

.test0
  height: 600px
  background: brown

.secondary
  height: 800px !important

.test1
  height: 600px
  background-color: green

.test2
  height: 600px
  background-color: tomato

.test3
  height: 600px
  background-color: purple

.test4
  height: 600px
  background-color: blue

.test5
  height: 600px
  background-color: yellow
</style>
