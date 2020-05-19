<template>
  <main class="home">
    <div class="kv-ad mt-4 mb-5">
      <div class="container">
        <div class="ad mb-4 row no-gutters">
          <div class="col-12 col-md-7 col-lg-8">
            <KvAdMd v-if="isMdUp" />
            <KvAd v-else />
          </div>
          <div class="col-12 col-md-5 col-lg-4">
            <div class="icon-wrapper">
              <div v-if="isMdUp" class="row align-content-center m-0">
                <div v-for="(item, i) in iconBoxes" :key="i" class="col-4">
                  <IconBox :info="item" />
                </div>
              </div>
              <IconSlide v-else />
            </div>
          </div>
        </div>
        <div v-if="isMdUp" class="row">
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
    </div>
    <div class="container">
      <div class="store my-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="title text-primary">附近推薦店家</h2>
          <a class="h5 font-weight-normal" href="">查看更多 <i class="fas fa-arrow-alt-circle-right"></i></a>
        </div>
        <div class=" row">
          <div v-for="item in list" :key="item.id" class="col-12 col-sm-6 col-md-4">
            <Card :info="item" />
          </div>
        </div>
      </div>
      <div v-if="isMdUp" class="row my-5">
        <div class="col-6">
          <div class="ad">
            <img class="img-fluid" src="https://picsum.photos/1000/242/?random=42" alt="">
          </div>
        </div>
        <div class="col-6">
          <div class="ad">
            <img class="img-fluid" src="https://picsum.photos/1000/242/?random=43" alt="">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Card from "../components/Card";
  import KvAdMd from "../components/KvAdMd";
  import KvAd from "../components/KvAd";
  import IconBox from "../components/IconBox";
  import IconSlide from "../components/IconSlide";
  import storeData from "../helper/data/home"


  export default {
    name: 'Home',
    components: {
      IconSlide,
      KvAdMd,
      KvAd,
      Card,
      IconBox
    },
    data() {
      return {
        list: [],
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
        position: {
          latitude: 121.5255704,
          longitude: 25.0461158
        }
      }
    },
    computed: {
      isMdUp() {
        return this.$store.state.isMdUp;
      }
    },
    methods: {
      getStore() {
        // const axios = this.$root.axios;
        // axios.get('../', {
        //   params: {
        //     ...this.position,
        //     page: 1,
        //     count: 9
        //   }
        // }).then(res => {
        //   // let data = res.data;
        //   console.log(res);
        // })
        // navigator.geolocation.getCurrentPosition()

        let data = JSON.stringify(storeData);
        data = JSON.parse(data);
        this.list = data.list;
      }
    },
    mounted() {
      this.getStore();
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";
  .kv-ad {
    .ad {
      color: white;
      background-color: $primary;
    }
  }

  .icon-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  @include media-breakpoint-down(sm) {
    .kv-ad {
      margin-top: 0 !important;
      .container {
        max-width: 100%;
        padding: 0;
        >.ad {
         border-width: 0;
         border-radius: 0;
         box-shadow: none;
        }
      }
    }
    .title {
      font-size: $h4-font-size;
      + .h5 {
        font-size: $h6-font-size;
      }
    }
  }
</style>
