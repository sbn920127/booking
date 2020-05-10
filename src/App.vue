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
        layout: "Base"
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/style";
</style>

