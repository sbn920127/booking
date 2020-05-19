<template>
  <div id="app" :is="layout">
  </div>
</template>

<script>
  import Base from "./components/layout/Base";
  export default {
    components: {Base},
    data() {
      return {
        layout: "Base",
        timer: false,
      }
    },
    methods: {
      responsive () {
        let sm = window.matchMedia('(min-width: 5px)');
        let md = window.matchMedia('(min-width: 768px)');
        let lg = window.matchMedia('(min-width: 992px)');

        this.$store.commit('updateBreakpoint', [
          {
            name: 'isMdUp',
            result: md.matches
          },
          {
            name: 'isSmUp',
            result: sm.matches
          },
          {
            name: 'isLgUp',
            result: lg.matches
          },
        ])
      }
    },
    mounted() {
      window.addEventListener('resize', this.responsive);
      this.responsive();
      // this.timer = setInterval(() => {
      //   let img = document.querySelectorAll('img');
      //   if(img.length) {
      //     clearInterval(this.timer)
      //   }
      // }, 50)

    },
    updated() {
      console.log('updated');
    },
    destroyed() {
      window.removeEventListener('resize');
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/style";

  @include media-breakpoint-down(sm) {
    #app {
      padding-bottom: 118px;
    }
  }
</style>

