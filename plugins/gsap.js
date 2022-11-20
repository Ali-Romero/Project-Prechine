import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default ({ app, route, $axios }, inject) => {
  inject('gsap', gsap)
}

gsap.config({
  nullTargetWarn: false,
})
