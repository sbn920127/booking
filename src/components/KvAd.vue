<template>
  <div class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(item, i) in slides" :key="i" class="carousel-item" :class="{active: i === 1}">
        <img class="d-block w-100" :src="item.img" alt="item.alt">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'KvAd',
    data() {
      return {
        slides: [
          {
            img: 'https://picsum.photos/744/388/?random=10',
            alt: ''
          },
          {
            img: 'https://picsum.photos/744/388/?random=20',
            alt: ''
          },
          {
            img: 'https://picsum.photos/744/388/?random=30',
            alt: ''
          },
          {
            img: 'https://picsum.photos/744/388/?random=40',
            alt: ''
          }
        ]
      }
    },

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
