<template>
  <main class="home">
    <div class="container">
      <div class="mt-4 mb-5">
        <div class="ad mb-4 row no-gutters">
          <div class="col-12 col-md-7 col-lg-8">
            <KvAdMd v-show="isResponsive" />
            <KvAd v-show="!isResponsive" />
          </div>
          <div class="col-12 col-md-5 col-lg-4">
            <div class="icon-wrapper">
              <div class="row align-content-center m-0">
                <div v-for="(item, i) in iconBoxs" :key="i" class="col-3 col-md-4">
                  <IconBox :card="item" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isResponsive" class="row">
          <div class="col-3">
            <div class="ad">
              <img class="img-fluid" src="https://picsum.photos/744/388/?random=10" alt="">
            </div>
          </div>
          <div class="col-3">
            <div class="ad">
              <img class="img-fluid" src="https://picsum.photos/744/388/?random=20" alt="">
            </div>
          </div>
          <div class="col-3">
            <div class="ad">
              <img class="img-fluid" src="https://picsum.photos/744/388/?random=30" alt="">
            </div>
          </div>
          <div class="col-3">
            <div class="ad">
              <img class="img-fluid" src="https://picsum.photos/744/388/?random=40" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="store my-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="title text-primary">附近推薦店家</h2>
          <a class="h5 font-weight-normal" href="">查看更多 <i class="fas fa-arrow-alt-circle-right"></i></a>
        </div>
        <div class=" row">
          <div v-for="i in 12" :key="i" class="col-12 col-sm-6 col-md-4">
            <Card
              :title="card.title"
              :tags="card.tags"
              :service="card.service"
            />
          </div>
        </div>
      </div>
      <div v-if="isResponsive" class="row my-5">
        <div class="col-6">
          <div class="ad">
            <img class="img-fluid" src="https://picsum.photos/1500/360/?random=42" alt="">
          </div>
        </div>
        <div class="col-6">
          <div class="ad">
            <img class="img-fluid" src="https://picsum.photos/1500/360/?random=43" alt="">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { responsive } from "../helper/extends";
  import Card from "../components/Card";
  import KvAdMd from "../components/KvAdMd";
  import KvAd from "../components/KvAd";
  import IconBox from "../components/IconBox";


export default {
  name: 'Home',
  components: {
    KvAdMd,
    KvAd,
    Card,
    IconBox
  },
  extends: responsive,
  data() {
    return {
      card: {
        title: '50嵐 捷運善導寺店',
        tags: {
          open: '10:00 ~ 19:00',
          distance: 0.5,
          rating: 3.5
        },
        service: ['drink', 'delivery']
      },
      iconBoxs: [
        {
          text: '找附近',
          icon: {
            backgroundImage: `url(${require('../assets/img/006-direction.png')})`
          }
        },
        {
          text: '找區域',
          icon: {
            backgroundImage: `url(${require('../assets/img/007-gps.png')})`
          }
        },
        {
          text: '找品牌',
          icon: {
            backgroundImage: `url(${require('../assets/img/005-business.png')})`
          }
        },
        {
          text: '曾點過',
          icon: {
            backgroundImage: `url(${require('../assets/img/cutlery.png')})`
          }
        },
        {
          text: '綁卡',
          icon: {
            backgroundImage: `url(${require('../assets/img/008-money.png')})`
          }
        },
        {
          text: '優惠券',
          icon: {
            backgroundImage: `url(${require('../assets/img/coupon.png')})`
          }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .ad {
    border-radius: $border-radius-lg;
    border: 1px solid $gray-400;
    box-shadow: 0 2px 3px -1px hsla(0,0%,67.5%,0.5);
    overflow: hidden;
  }

  .icon-wrapper {
    width: 100%;
    height: 100%;
    color: white;
    background-color: $primary;
    display: flex;
    align-items: center;
  }

  @include media-breakpoint-down(sm) {
    .title {
      font-size: $h4-font-size;
      + .h5 {
        font-size: $h6-font-size;
      }
    }
    .icon-wrapper {
      overflow-y: hidden;
      overflow-x: auto;
      .row {
        flex-wrap: nowrap;
      }
    }
  }
</style>
