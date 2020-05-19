<template>
  <div class="carousel slide">
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="i in slideInfo.slice"
        :key="i"
        :class="{ active: className.active.indexOf(i) > -1,
                  'carousel-item-left': className.left === i,
                  'carousel-item-next': className.next === i,
                  'carousel-item-right': className.right === i,
                  'carousel-item-prev': className.prev === i }"
      >
        <div class="row">
          <div
              class="col-3"
              v-for="(item, j) in iconBoxes.slice((i - 1) * slideInfo.total, i * slideInfo.total)"
              :key="j"
          >
            <IconBox :info="item" />
          </div>
        </div>
      </div>
    </div>
    <ol class="carousel-indicators">
      <li v-for="i in slideInfo.slice"
          :key="i"
          :class="{active: count === i}"
          @click="slideTo(i)"
      ></li>
    </ol>
  </div>
</template>

<script>
  import { slideShow } from "../helper/extends";
  import IconBox from "./IconBox";
  export default {
    name: 'IconSlide',
    components: {
      IconBox
    },
    extends: slideShow,
    data() {
      return {
        iconBoxes: [
          {
            text: '找附近',
            style: {
              backgroundImage: `url(${require('../assets/img/006-direction.png')})`
            }
          },
          {
            text: '找區域',
            style: {
              backgroundImage: `url(${require('../assets/img/007-gps.png')})`
            }
          },
          {
            text: '找品牌',
            style: {
              backgroundImage: `url(${require('../assets/img/005-business.png')})`
            }
          },
          {
            text: '曾點過',
            style: {
              backgroundImage: `url(${require('../assets/img/cutlery.png')})`
            }
          },
          {
            text: '綁卡',
            style: {
              backgroundImage: `url(${require('../assets/img/008-money.png')})`
            }
          },
          {
            text: '優惠券',
            style: {
              backgroundImage: `url(${require('../assets/img/coupon.png')})`
            }
          }
        ],
        slideInfo: {
          slice: 2,
          total: 4
        }
      }
    },
    methods: {
      slideTo(index) {
        this.showing(index);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .carousel {
    width: 100%;
    padding-top: .5rem;
    &-item {
      padding-left: $grid-gutter-width / 2;
      padding-right: $grid-gutter-width / 2;
    }
    &-indicators {
      position: relative;
      margin-top: .25rem;
    }
  }
</style>
