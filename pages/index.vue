<template>
  <ui-layout>
    <template #main>
      <app-main-section-anim>
        <template #main-section>
          <app-main-section />
        </template>
        <template #difference-section>
          <app-difference-section />
        </template>
      </app-main-section-anim>

      <app-scroll-sections timeline-id="cases-section">
        <template #primary>
          <app-about-section />
        </template>
        <template #secondary>
          <app-cases-section />
        </template>
      </app-scroll-sections>

      <app-income-section />

      <app-scroll-sections timeline-id="invite-section">
        <template #primary>
          <app-build-section />
        </template>
        <template #secondary>
          <app-invite-section />
        </template>
      </app-scroll-sections>
    </template>
    <template #footer>
      <app-footer></app-footer>
      <ui-modal v-model="modal">
        <app-feedback-modal-leave />
      </ui-modal>
    </template>
  </ui-layout>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
    }
  },
  beforeDestroy() {
    document.removeEventListener('mouseleave', this.onMouseLeave)
  },
  mounted() {
    document.addEventListener('mouseleave', this.onMouseLeave)
  },
  methods: {
    onMouseLeave(e) {
      if (e.clientY < 10) {
        setTimeout(() => {
          document.removeEventListener('mouseleave', this.onMouseLeave)
          this.modal = true
        }, 2000)
      }
    },
  },
}
</script>
