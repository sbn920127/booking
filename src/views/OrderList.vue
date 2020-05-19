<template>
  <div class="bg-light pt-4 pb-5">
    <div class="order ">
      <div class="order-step">
        <ul class="nav">
          <li v-for="(item, i) in orderStep"
              :key="i" class="nav-item nav-link"
              :class="{ active: item.active, complete: item.complete }"
          >
            <div class="icon-box">
              <div class="icon-box-round">
                <span v-show="!item.active && !item.complete">{{ i + 1 }}</span>
                <div v-show="item.active && !item.complete">
                  <i class="fas fa-pencil-alt"></i>
                </div>
                <div v-show="item.active && item.complete">
                  <i class="fas fa-check"></i>
                </div>
              </div>
              <p>{{ item.title }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="order-content">
        <div class="row">
          <div class="d-flex align-items-center col">
            <div class="order-store">
              <h4 class="text-primary">50嵐 板橋莒光店</h4>
              <p><small>自取 - 約15分鐘</small></p>
              <p><small>外送 - 約35~95分鐘</small></p>
            </div>
          </div>
          <div v-for="(item, i) in iconBoxes" :key="i" class="icon-btn d-flex align-items-center col-auto bg-primary text-white">
            <icon-box :info="item" />
          </div>
        </div>
        <div class="row">
          <div class="d-flex align-items-center col">
            <div class="order-user">
              <Avatar class="mr-3" />
              <p>User name</p>
            </div>
          </div>
          <div class="d-flex align-items-center col-auto">
            <div class="icon-round"><i class="fas fa-dollar-sign"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import IconBox from "../components/IconBox";
  import Avatar from "../components/Avatar";
  export default {
    name: 'OrderList',
    components: {Avatar, IconBox},
    data() {
      return {
        orderStep: [
          {
            title: '購買明細',
            active: true,
            complete: false
          },
          {
            title:'訂購資訊',
            active: false,
            complete: false
          },
          {
            title: '送單完成',
            active: false,
            complete: false
          }
        ],
        iconBoxes: [
          {
            text: '取餐',
            style: {
              backgroundImage: `url(${require('../assets/img/shopping.png')})`
            }
          },
          {
            text: '揪團',
            style: {
              backgroundImage: `url(${require('../assets/img/teamwork.png')})`
            }
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .order {
    max-width: 630px;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    border-radius: $border-radius-lg;
    .nav {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    &-step {
      .icon-box {
        color: $gray-500;
        font-size: $font-size-sm;
        &-round {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          background-color: $gray-500;
          margin-bottom: .5rem;
        }
      }
      .nav-item {
        position: relative;
        + .nav-item {
          &::before {
            content: '';
            display: block;
            width: calc(100% - 44px);
            height: 1px;
            position: absolute;
            background-color: $gray-300;
            top: 32px;
            right: 100%;
            transform: translate(50%, -50%);
          }
        }
        &.active {
          .icon-box {
            color: $primary;
            &-round {
              background-color: $primary;
            }
          }
          &::before {
            background-color: $primary;
          }
        }
      }
    }
    &-content {
      padding-right: $grid-gutter-width / 2;
      padding-left: $grid-gutter-width / 2;
      .row {
        border-top: 1px solid $border-color;
        .col {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
      }
    }
    .icon-box {
      transition: transform .5s ease;
    }
    .icon-btn {
      cursor: pointer;
      + .icon-btn {
        border-left: 1px solid rgba(white, .5);
      }
      &:hover {
        .icon-box {
          transform: translateY(-4px);
        }
      }
    }
    &-store {
      > h4 {
        font-size: $font-size-base;
        font-weight: bold;
      }
      p {
        margin-bottom: 0;
      }
    }
    &-user {
      display: flex;
      align-items: center;
      p {
        margin-bottom: 0;
      }
    }
  }

</style>
