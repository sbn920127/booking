<template>
  <div class="progress">
    <div class="progress-bar bg-danger" :style="style"></div>
  </div>
</template>

<script>


export default {
  name: 'Progress',
  data() {
    return {
      style: {
        width: "100%"
      }
    }
  },
  mounted() {
    console.log('progress mounted');
  }
}
</script>

<style lang="scss" scoped>
  .progress {
    height: .25rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 0;
  }
</style>
