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
    </template>
  </ui-layout>
</template>
