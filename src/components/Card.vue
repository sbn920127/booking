<template>
  <div class="card mb-4">
    <div class="card-img">
      <Avatar class="store-img" :imgStyle="storeImg" />
      <img ref="img" class="rounded img-fluid" :src="info.brand_photo">
      <LoadAnimate v-if="!isLoaded" />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <div class="row">
        <div class="col-auto">
          <div class="card-tag">
            <span class="badge badge-secondary">{{ orderTime }}</span>
            <span class="badge badge-secondary">{{ distance }}</span>
            <span class="badge badge-secondary"><Rating :num="rating" /></span>
          </div>
          <p class="card-text">{{ info.address }}</p>
        </div>
        <div class="col-auto d-flex align-items-end">
          <ul v-if="tags.length" class="service nav">
            <li v-for="(item, i) in tags" :key="i" class="nav-item">
              <img class="img-fluid" :src="item">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "./Rating";
import LoadAnimate from "./LoadAnimate";
import Avatar from "./Avatar";
export default {
  name: 'Card',
  components: {Avatar, LoadAnimate, Rating},
  props: ['info',],
  data() {
    return {
      isLoaded: false,
      storeImg: {
        backgroundImage: `url(${this.info.image})`,
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        backgroundColor: 'white'
      }
    }
  },
  computed: {
    title () {
      return this.info.brand_name + " " + this.info.name;
    },
    orderTime () {
      let open = this.getTime(this.info.order_start_time);
      let close = this.getTime(this.info.order_end_time);

      return open + " ~ " + close
    },
    distance () {
      let distance = this.info.distance;
      distance = this.formatFloat(distance / 1000, 1);

      return distance + '公里'
    },
    rating () {
      return this.info.rating_average_star;
    },
    tags () {
      let info = this.info;
      let drink = require('../assets/img/010-drink.png');
      let food = require('../assets/img/011-rice.png');
      let free = require('../assets/img/012-motorbike.png');
      let imgs = [];

      info["meal_tag_info"].forEach(item => {
        if (item.name == '飲料') {
          imgs.push(drink);
        } else if (item.name == '中式料理') {
          imgs.push(food);
        }
      });

      if (info.has_shipping_fee == 0) {
        imgs.push(free);
      }

      return imgs;
    }
   },
  methods: {
    getImage() {
      const vm = this;
      const img = vm.$refs.img;

      img.addEventListener('load', vm.updateLoad)
    },
    updateLoad() {
      this.isLoaded = true;
    },
    getTime (time) {
      let times = time.split(':');

      return times[0] + ":" + times[1];
    },
    formatFloat(num, pos) {
      let size = Math.pow(10, pos);
      return Math.round(num * size) / size;
    },
  },
  mounted() {
    this.getImage();
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";
  .card {
    border-width: 0;
    .card-body {
      padding-right: 0;
      padding-left: 0;
    }
    &-img {
      width: 100%;
      padding-top: 57.5%;
      position: relative;
      overflow: hidden;
      > img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &-tag {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: .5rem;
      > .badge {
        font-size: 14px;
        font-weight: normal;
        color: $gray-700;
        background-color: $gray-200;
        margin-right: .5rem;
        margin-bottom: .5rem;
      }
    }
    &-text {
      color: $gray-700
    }
  }
  .store-img {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1000;
  }
  .service {
    .nav-item {
      > img {
        width: 24px;
        height: 24px;
        padding: .25rem;
      }
    }
  }
  @include media-breakpoint-down(sm) {
    .card {
      &-body {
        padding-right: .75rem;
        padding-left: .75rem;
      }
      &-title {
        font-size: $h5-font-size;
      }
    }
  }
</style>
