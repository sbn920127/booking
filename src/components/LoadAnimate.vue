<template>
  <div class="loading">
    <div class="loading-wrap">
      <div class="loading-circle"></div>
      <div class="loading-circle"></div>
      <div class="loading-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadAnimate',
}
</script>

<style lang="scss">
  @import "../assets/scss/base";

  .loading {
    background-color: $gray-800;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    &-wrap {
      width: 60px;
      display: flex;
      justify-content: space-between;
    }
    &-circle {
      width: 12px;
      height: 12px;
      background-color: white;
      border-radius: 50%;
      animation: zoom 1s infinite;
      &:nth-child(2) {
        animation-delay: .1s;
      }
      &:nth-child(3) {
        animation-delay: .2s;
      }
    }
  }

  @keyframes zoom {
    0% {
      transform: scale(.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
