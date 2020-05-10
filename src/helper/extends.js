import Vue from 'vue'

export const responsive = Vue.extend({
  data() {
    return {
      isResponsive: false
    }
  },
  methods: {
    responsive (e, point = 'min-width: 768px') {
      let breakpoint = window.matchMedia(`(${point})`);
      this.isResponsive = breakpoint.matches;
    }
  },
  mounted() {
    window.addEventListener('resize', this.responsive);
    this.responsive();
  },
  destroyed() {
    window.removeEventListener('resize', this.responsive);
  }
});
