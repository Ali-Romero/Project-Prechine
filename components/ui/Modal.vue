<template>
  <client-only>
    <v-modal
      v-slot="{ close }"
      v-bind="$attrs"
      scroll-lock-gap-method="padding"
      :layout="false"
      v-on="$listeners"
    >
      <slot v-bind="{ close }" />
    </v-modal>
  </client-only>
</template>

<script>
import 'vue-pro-modal/dist/vue-pro-modal.css'
import VModal from 'vue-pro-modal/src/components/lib/Modal.vue'

export default {
  components: {
    VModal
  }
}
</script>

<style lang="sass">
.modal
  padding: 0 !important
  &__container
    @include scrollbar()
</style>
