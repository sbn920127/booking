<template>
  <nav class="main-menu fixed-bottom">
    <div class="container">
      <ul class="nav nav-fill">
        <li v-for="(item, i) in iconBoxes" :key="i" class="nav-item">
          <router-link :to="item.link" class="nav-link">
            <IconBox :info="item" />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import IconBox from "./IconBox";

  export default {
    name: 'MainMenuMd',
    components: {IconBox},
    data() {
      return {
        showOtherMenu: false,
        iconBoxes: [
          {
            link: "/",
            text: '訂購',
            style: {
              backgroundImage: `url(${require('../assets/img/001-booking.png')})`
            }
          },
          {
            link: "/",
            text: '購物車',
            style: {
              backgroundImage: `url(${require('../assets/img/002-shopping-cart.png')})`
            }
          },
          {
            link: "/",
            text: '訂單',
            style: {
              backgroundImage: `url(${require('../assets/img/009-restaurant.png')})`
            }
          },
          {
            link: "/",
            text: '會員',
            style: {
              backgroundImage: `url(${require('../assets/img/003-social.png')})`
            }
          },
          {
            link: "/more",
            text: '更多',
            style: {
              backgroundImage: `url(${require('../assets/img/004-travel.png')})`
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .main-menu {
    background-color: $gray-200;
    .icon-wrap {
      width: auto;
      padding: 0;
    }
  }
  .nav {
    &-link {
      color: $body-color;
    }
  }
  .dropdown-toggle {
    &::after {
      content: none;
    }
  }

  @include media-breakpoint-down(xs) {
    .nav {
      &-link {
        padding-right: .25rem;
        padding-left: .25rem;
      }
    }
  }

</style>
