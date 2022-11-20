<template>
  <div ref="section" class="main-section-anim">
    <div ref="main" class="main-section-anim__primary">
      <slot name="main-section" />
    </div>
    <div ref="overlay" class="main-section-anim__overlay" />
    <div ref="difference" class="main-section-anim__secondary">
      <slot name="difference-section" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const mm = this.$gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const timeline = this.$gsap.timeline({
        id: 'main-section-anim',
        scrollTrigger: {
          anticipatePin: true,
          markers: true,
          trigger: this.$refs.section,
          pin: true,
          pinSpacing: true,
          start: 'top top',
          end: 'bottom -=5000',
          scrub: 1.4,
        },
      })

      timeline.to(this.$refs.overlay, { opacity: 0 }, 0)
      timeline.to(this.$refs.main, { y: '-100%' }, 0)
    })
  },
}
</script>

<style lang="sass" scoped>
.main-section-anim
  @media (min-width: map-get($breakpoints, 'sm'))
    position: relative
  &__primary
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 100%
      position: absolute
      top: 0
      left: 0
      z-index: 10

  &__overlay
    @media (min-width: map-get($breakpoints, 'sm'))
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      background-color: rgba(24, 29, 17, 1)
      pointer-events: none
      z-index: 9
</style>
