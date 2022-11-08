<template>
  <component :is="`icons-${name}`" class="d-block"></component>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
