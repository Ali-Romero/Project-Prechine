<template>
  <ui-page>
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
        <!-- <ui-modal v-model="modal">
          <app-feedback-modal-leave />
        </ui-modal> -->
      </template>
    </ui-layout>
  </ui-page>
</template>

<script>
// export default {
//   data() {
//     return {
//       timer: null,
//       modal: false,
//     }
//   },
//   beforeDestroy() {
//     document.body.removeEventListener('mouseleave', this.onMouseLeave)
//     document.body.removeEventListener('mouseenter', this.onMouseenter)
//   },
//   mounted() {
//     document.body.addEventListener('mouseleave', this.onMouseLeave)
//     document.body.addEventListener('mouseenter', this.onMouseenter)
//   },
//   methods: {
//     onMouseLeave(e) {
//       if (e.clientY < 10) {
//         this.timer = setTimeout(() => {
//           document.body.removeEventListener('mouseleave', this.onMouseLeave)
//           this.modal = true
//         }, 500)
//       }
//     },
//     onMouseenter() {
//       clearTimeout(this.timer)
//     },
//   },
// }
</script>
