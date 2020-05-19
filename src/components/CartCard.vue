<template>
  <div class="cart-card card">
    <div class="card-body">
      <span class="data">2020-05-12</span>
      <button class="group-buy btn btn-sm btn-outline-secondary">揪團</button>
      <Avatar class="cart-card-img" :imgStyle="storeImg" />
      <p class="cart-card-qty">0 項商品</p>
      <h5 class="card-title">50嵐 捷運善導寺店</h5>
      <div class="cart-card-total">
        <p>共 0 元</p>
        <button class="btn"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
  import Avatar from "./Avatar";
  export default {
    name: 'CartCard',
    components: {Avatar},
    data() {
      return {
        storeImg: {
          backgroundImage: `url(https://s3-ap-northeast-1.amazonaws.com/nidin-production/store/icons/b_43_icon_20200413_112628_af13c.png)`,
          width: '70px',
          height: '70px',
          border: '1px solid rgba(172, 172, 172, 0.5)',
          borderRadius: '50%',
          backgroundColor: 'white'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .cart-card {
    background-color: white;
    border-radius: $border-radius;
    box-shadow: $box-shadow-sm;
    border-width: 0;
    margin-bottom: 1.5rem;
    &-img {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }
    &-qty {
      text-align: center;
    }
    &-total {
      text-align: center;
      font-size: $h4-font-size;
      font-weight: bold;
      position: relative;
      p {
        margin-bottom: 0;
      }
      > .btn {
        color: $red;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .card-title {
      text-align: center;
      font-size: $font-family-base;
      padding-bottom: .75rem;
      border-bottom: 1px solid $border-color;
    }
  }
  .data {
    float: right;
    padding: 3px 0;
  }
  /*.group-buy {*/
  /*  margin-bottom: 1rem;*/
  /*}*/
</style>
