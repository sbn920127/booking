<template>
  <div class="masonry" :style="{ height: containerHeight }">
    <div v-for="(col, i) in menu" :key="i" class="masonry-item" :style="col.position">
      <transition name="fade">
        <MenuCategory :category="col" />
      </transition>
    </div>
  </div>
</template>

<script>
import MenuCategory from "./MenuCategory";
export default {
  name: 'Masonry',
  components: {MenuCategory},
  data() {
    return {
      config: {
        enable: false,
        length: 3,
        gutters: {
          x: 0,
          y: 0
        },
        container: {
          width: '',
          height: ''
        },
        cols: []
      },
      menu: [
        {
          title: '店長推薦',
          list: [
            {
              name: '四季春珍波椰-大',
              price: {
                cold: 40,
                hot: 40
              },
              soldOut: true
            },
            {
              name: '四季春珍波椰-中',
              price: {
                cold: 30,
                hot: 30
              },
              soldOut: false
            }
          ]
        },
        {
          title: '找好茶',
          list: [
            {
              name: '茉莉綠茶-大',
              price: {
                cold: 30,
                hot: 30
              },
              soldOut: false
            },
            {
              name: '阿薩姆紅茶-大',
              price: {
                cold: 30,
                hot: 30
              },
              soldOut: false
            },
            {
              name: '四季春青茶-大',
              price: {
                cold: 30,
                hot: 30
              },
              soldOut: false
            },
            {
              name: '黃金烏龍-大',
              price: {
                cold: 30,
                hot: 30
              },
              soldOut: false
            }
          ]
        },
        {
          title: '找奶茶',
          list: [
            {
              name: '奶茶-大',
              price: {
                cold: 50,
                hot: 50
              },
              soldOut: false
            },
            {
              name: '奶綠-大',
              price: {
                cold: 50,
                hot: 50
              },
              soldOut: false
            },
            {
              name: '紅茶瑪奇朵-大',
              price: {
                cold: 50,
                hot: 50
              },
              soldOut: false
            }
          ]
        },
        {
          title: '找口感',
          list: [
            {
              name: '波霸紅-大',
              price: {
                cold: 40,
                hot: 40
              },
              soldOut: false
            },
            {
              name: '波霸綠-大',
              price: {
                cold: 40,
                hot: 40
              },
              soldOut: false
            },
            {
              name: '波霸青-大',
              price: {
                cold: 40,
                hot: 40
              },
              soldOut: false
            }
          ]
        },
        {
          title: '找口感',
          list: [
            {
              name: '波霸紅-大',
              price: {
                cold: 40,
                hot: 40
              },
              soldOut: false
            },
            {
              name: '波霸綠-大',
              price: {
                cold: 40,
                hot: 40
              },
              soldOut: false
            },
            {
              name: '波霸青-大',
              price: {
                cold: 40,
                hot: 40
              },
              soldOut: false
            }
          ]
        },
        {
          title: '找口感2',
          list: [
            {
              name: '波霸紅-大',
              price: {
                cold: 40,
                hot: 40
              },
              soldOut: false
            },
            {
              name: '波霸綠-大',
              price: {
                cold: 40,
                hot: 40
              },
              soldOut: false
            },
            {
              name: '波霸青-大',
              price: {
                cold: 40,
                hot: 40
              },
              soldOut: false
            }
          ]
        }
      ],
    }
  },
  computed: {
    isLgUp() {
      return this.$store.state.isLgUp;
    },
    containerHeight() {
      return typeof this.config.container.height === "number" ?  this.config.container.height + 'px' : this.config.container.height;
    }
  },
  watch: {
    isLgUp(val) {
      if (!val) {
        this.config.container.height = 'auto';
      }
      this.config.enable = val;
    },
    ['config.enable'](val) {
      if (val) {
        this.init();
      } else {
        this.menu.forEach(item => {
          item.position.top = "";
          item.position.left = "";
        })
      }
    }
  },
  methods: {
    init() {
      const config = this.config;

      for (let i = 0; i < config.length; i++) {
        this.$set(config.cols, i, {
          top: 0,
          left: 0
        });
      }
      this.setItemSize(this.menu);
    },
    setItemSize(data) {
      const vm = this;
      if (data.length > 0) {
        data.forEach((item, i) => {
          let target = document.querySelectorAll('.masonry-item')[i];

          vm.$set(data[i], 'width', target.clientWidth);
          vm.$set(data[i], 'height', target.clientHeight);
          vm.$set(data[i], 'position', vm.setPosition(target.clientWidth, target.clientHeight));
        });
      }
    },
    setPosition(w = 0, h = 0) {
      let min, max, index, top, left;
      let data = [];
      const config = this.config;

      data = config.cols.map(item => {
        return item.top;
      });

      min = Math.min(...data);
      index = data.indexOf(min);
      top = min;
      left = w * index;
      data[index] = min + h;

      config.cols[index]['top'] = min + h;
      config.cols[index]['left'] = left;

      max = Math.max(...data);
      config.container.height = max;

      return {
        top: top + 'px',
        left: left + 'px'
      };
    }
  },
  mounted() {
    this.config.enable = this.isLgUp;
    if (this.config.enable) {
      this.init();
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/base";

  .masonry {
    position: relative;
    &-item {
      top: 0;
      left: 0;
    }
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  @include media-breakpoint-up(lg) {
    .masonry {
      &-item {
        width: 33.333333%;
        padding: 0 12px;
        position: absolute;
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }
    }
  }


</style>
