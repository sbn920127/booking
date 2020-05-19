<template>
  <div class="store-info">
    <div class="container">
      <div class="ad row no-gutters">
        <div class="mb-last d-flex flex-column col-12 col-lg-4">
          <div class="mb-last store-info-content bg-white">
            <div class="store-info-avatar">
              <Avatar />
            </div>
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">{{ store.name }}</h4>
                <div class="scroll">
                  <RatingMore :info="store.rating" />
                  <ul class="nav flex-column">
                    <li class="nav-item">
                        <span class="nav-link">
                          <i class="fas fa-clock fa-fw mr-1"></i>
                          {{ opening }}
                        </span>
                    </li>
                    <template v-if="isLgUp">
                      <li class="nav-item">
                        <a :href="store.phone.link" class="nav-link">
                          <i class="fas fa-phone fa-fw mr-1"></i>
                          {{ store.phone.number }}
                        </a>
                      </li>
                      <li class="nav-item">
                        <a :href="store.address.link" class="nav-link">
                          <i class="fas fa-map-marker-alt fa-fw mr-1"></i>
                          {{ store.address.text }}
                        </a>
                      </li>
                      <li class="nav-item">
                        <span class="nav-link">
                          <i class="fas fa-dollar-sign fa-fw mr-1"></i>
                          {{ pay }}
                        </span>
                      </li>
                      <li class="nav-item">
                        <span class="nav-link">
                          <i class="fas fa-money-bill-wave fa-fw mr-1"></i>
                          {{ store.money.msg }}
                        </span>
                      </li>
                      <li class="nav-item">
                        <span class="nav-link">
                          <i class="fas fa-address-card fa-fw mr-1"></i>
                          {{ store.other }}
                        </span>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="tools">
            <div class="row">
              <div v-for="(item, i) in iconBoxes" :key="i" class="col">
                <IconBox :info="item" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8">
          <div class="carousel slide">
            <div class="carousel-inner">
              <div v-for="(item, i) in store.banner" :key="i" class="carousel-item" :class="{active: i === 0}">
                <div class="banner" :style="item"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Avatar from "../components/Avatar";
  import RatingMore from "../components/RatingMore";
  import IconBox from "./IconBox";
  import { slideShow } from "../helper/extends";

  export default {
    name: 'StoreInfo',
    components: {IconBox, RatingMore, Avatar},
    extends: slideShow,
    data() {
      return {
        store: {
          name: "50嵐 捷運善寺店",
          avatarUrl: '',
          banner: [
            {
              backgroundImage: 'url(https://s3-ap-northeast-1.amazonaws.com/nidin-production/banner/s_485_h_c_w_20200413_112705_f9a46.png)'
            },
            {
              backgroundImage: 'url(https://s3-ap-northeast-1.amazonaws.com/nidin-production/bannaer/s_1175_h_c_w_20200430_111848_dceb8.jpg)'
            }
          ],
          rating: {
            fraction: 4,
            count: 2
          },
          time: {
            open: "11:00",
            close: "20:30"
          },
          phone: {
            number: '02-2351-8482',
            link: 'tel:02-2351-8482'
          },
          address: {
            text: '台北市中正區忠孝東路一段11號',
            link: 'https://www.google.com/maps/place/台北市中正區忠孝東路一段11號/@25.04488600000000000000,121.52385740000000000000,17z'
          },
          money: {
            isMoney: true,
            msg: '現金單筆消費上限 $10000'
          },
          other: '此門市支援專屬貼紙'
        },
        iconBoxes: [
          {
            style: {
              backgroundImage: `url(${require('../assets/img/shopping.png')})`,
            },
            text: '怎取餐'
          },
          {
            style: {
              backgroundImage: `url(${require('../assets/img/zoom.png')})`,
            },
            text: '搜尋'
          },
          {
            style: {
              backgroundImage: `url(${require('../assets/img/teamwork.png')})`,
            },
            text: '揪團'
          }
        ]
      }
    },
    computed: {
      isLgUp() {
        return this.$store.state.isLgUp;
      },
      opening() {
        return this.store.time.open + " ~ "  + this.store.time.close;
      },
      pay() {
        let keyword = this.store.money.isMoney ? '可' : '不可';
        return `${keyword}現金`;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .card {
    padding: 0;
    border-width: 0;
    &-title {
      font-size: $h5-font-size;
      font-weight: bold;
    }
    &-body {
      padding: 0;
    }
    .nav {
      &-link {
        color: $gray-700;
        text-indent: -24px;
        padding: 6px 0px 6px 24px;
      }
    }
    a.nav-link {
      &:hover {
        color: $primary
      }
    }
  }

  .store-info {
    &-content {
      display: flex;
      flex-wrap: wrap;
      padding: 1rem;
      .scroll {
        max-height: 130px;
        overflow: auto;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      .store-avatar {
        margin-right: 15px;
      }
      .card {
        flex: 1 1;
      }
    }
    &-avatar {
      padding-right: 15px
    }
    .ad {
      border-width: 0;
    }
  }

  .carousel {
    .banner {
      width: 100%;
      height: 300px;
      background: $gray-200 no-repeat center center / cover;
    }
  }

  .tools {
    color: white;
    background-color: $primary;
  }

  @include media-breakpoint-down(md) {
    .mb-last {
      order: 1;
    }
  }

</style>
