<template>
  <div ref="section" class="scroll-sections">
    <div ref="primary" class="scroll-sections__primary">
      <slot name="primary" />
    </div>
    <div ref="overlay" class="scroll-sections__overlay" />
    <div class="scroll-sections__secondary">
      <slot name="secondary" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const mm = this.$gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const timeline = this.$gsap.timeline({
        id: 'scroll-sections',
        scrollTrigger: {
          anticipatePin: true,
          markers: true,
          trigger: this.$refs.section,
          pin: true,
          pinSpacing: true,
          start: 'top top',
          end: 'bottom',
          scrub: true,
        },
      })

      timeline.to(this.$refs.overlay, { opacity: 0 }, 0)
      timeline.to(this.$refs.primary, { y: '-100%' }, 0)
    })
  },
}
</script>

<style lang="sass" scoped>
.scroll-sections
  position: relative

  &__primary
    width: 100%
    position: absolute
    top: 0
    left: 0
    z-index: 10

  &__overlay
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    background-color: rgba(0, 0, 0, 0.7)
    pointer-events: none
</style>
