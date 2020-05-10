<template>
  <div class="kv-ad" :style="css">
  </div>
</template>

<script>
  export default {
    name: 'KvAdMd',
    data () {
      return {
        img: 'https://picsum.photos/800/460/?random=1',
      }
    },
    computed: {
      css () {
        return {
          height: '300px',
          backgroundImage: 'url(' + this.img + ')'
        };
      }
    }
  }
</script>

<style lang="scss" scoped>
  .kv-ad {
    height: 300px;
    background-color: white;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
