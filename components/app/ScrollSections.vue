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
  props: {
    timelineId: {
      type: String,
      default: 'scroll-sections',
    },
  },
  mounted() {
    const mm = this.$gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
      const timeline = this.$gsap.timeline({
        id: this.timelineId,
        scrollTrigger: {
          anticipatePin: 0,
          markers: false,
          trigger: this.$refs.section,
          pin: true,
          pinSpacing: true,
          start: 'top top',
          end: 'bottom',
          scrub: 2,
        },
      })

      timeline.to(this.$refs.overlay, { opacity: 0 }, 0)
      timeline.to(this.$refs.primary, { y: '-100%', ease: 'power1.out' }, 0)
    })
  },
}
</script>

<style lang="sass" scoped>
.scroll-sections
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
      top: 2px
      left: 0
      background-color: rgba(0, 0, 0, 1)
      pointer-events: none
      z-index: 9

  &__nav
    color: white
    pointer-events: none
</style>
