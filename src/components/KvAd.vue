<template>
  <div class="carousel slide">
    <div class="carousel-inner">
      <div
          v-for="(item, i) in slides"
          :key="i"
          class="carousel-item"
          :class="{ active: className.active.indexOf(i) > -1,
                    'carousel-item-left': className.left === i,
                    'carousel-item-next': className.next === i }">
        <img class="d-block w-100" :src="item.img" alt="item.alt">
      </div>
    </div>
  </div>
</template>

<script>
  import { slideShow } from "../helper/extends";

  export default {
    name: 'KvAd',
    extends: slideShow,
    data() {
      return {
        slides: [
          {
            img: 'https://picsum.photos/744/388/?random=10',
            alt: '',
            class: {
              active: true,
              "carousel-item-left": false,
              "carousel-item-next": false
            }
          },
          {
            img: 'https://picsum.photos/744/388/?random=20',
            alt: '',
            class: {
              active: false,
              "carousel-item-left": false,
              "carousel-item-next": false
            }
          },
          {
            img: 'https://picsum.photos/744/388/?random=30',
            alt: '',
            class: {
              active: false,
              "carousel-item-left": false,
              "carousel-item-next": false
            }
          },
          {
            img: 'https://picsum.photos/744/388/?random=40',
            alt: '',
            class: {
              active: false,
              "carousel-item-left": false,
              "carousel-item-next": false
            }
          }
        ]
      }
    },
    mounted() {
      this.counter(this.slides);
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
