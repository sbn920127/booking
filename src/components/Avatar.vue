<template>
  <div class="Avatar">
    <div class="img" :style="imgStyle" :title="imgTitle"></div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: ['imgStyle', 'imgTitle']
}
</script>

<style lang="scss">
  .img {
    width: 38px;
    height: 38px;
    background: transparent url(../assets/img/003-social.png) no-repeat center center / cover;
  }
</style>
