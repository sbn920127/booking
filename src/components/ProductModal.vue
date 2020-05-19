<template>
  <Modal :modal-id="modalId" target="product" class="product">
    <template slot="title">{{ product.title }}</template>
    <template slot="content">
      <div v-for="(option, i) in product.customization" :key="i" class="option">
        <h4><i class="fas fa-asterisk text-danger mr-1"></i>{{ option.name }}</h4>
        <div class="option-list">
          <div class="row">
            <div v-for="(item, i) in option.options" :key="i" class="col-4 p-1">
              <div class="option-item">
                {{ item.name }}
                <span v-if="item.price > 0" class="add">{{ "+" + item.price + "元" }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-orderer mb-5">
        <div class="input-group">
          <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <img width="24" src="../assets/img/003-social.png" alt="">
                </span>
          </div>
          <input type="text" class="form-control" placeholder="訂購人" />
        </div>
        <p class="text-right">最多10字，此門市支援專屬姓名貼紙</p>
      </div>
    </template>
    <template slot="footer">
      <div class="product-order">
        <div class="row">
          <div class="col-6">
            <p class="price">總金額：{{ orderTotal }}元</p>
            <div class="count">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">-</span>
                </div>
                <input type="number" class="form-control" v-model="order.qty" min="1" />
                <div class="input-group-append">
                  <span class="input-group-text">+</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button class="btn btn-primary btn-block add-to-cart">加入購物車</button>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "./Modal";
export default {
  name: 'ProductModal',
  props: ['product_id', 'modal-id'],
  components: {Modal},
  data() {
    return {
      product: {
        title: '１四季春珍波椰-大',
        price: 40,
        customization: [
          {
            name: '冰度',
            options: [
              {
                name: '去冰',
                price: 0
              },
              {
                name: '微冰',
                price: 0
              },
              {
                name: '少冰',
                price: 0
              },
              {
                name: '標準冰',
                price: 0
              },
              {
                name: '常溫',
                price: 0
              },
              {
                name: '溫',
                price: 0
              },
              {
                name: '熱',
                price: 0
              }
            ]
          },
          {
            name: '甜度',
            options: [
              {
                name: '無糖',
                price: 0
              },
              {
                name: '微糖',
                price: 0
              },
              {
                name: '半糖',
                price: 0
              },
              {
                name: '少糖',
                price: 0
              },
              {
                name: '9分甜',
                price: 0
              },
              {
                name: '標準甜',
                price: 0
              }
            ]
          },
          {
            name: '加料',
            maxLength: 3,
            options: [
              {
                name: '珍珠',
                price: 0
              },
              {
                name: '波霸',
                price: 0
              },
              {
                name: '椰果',
                price: 0
              },
              {
                name: '珍波椰',
                price: 0
              },
              {
                name: '混珠',
                price: 0
              },
              {
                name: '布丁',
                price: 10
              },
              {
                name: '香草冰淇淋',
                price: 10
              }
            ]
          }
        ]
      },
      order: {
        qty: 1,
        options: []
      }
    }
  },
  computed: {
    orderTotal() {
      return this.order.qty > 0 ? this.product.price * this.order.qty : this.product.price;
    }
  },
  methods: {
    openModal() {
      console.log(this.modalId)
      // this.show()
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .product {
    &-orderer {
      padding-top: 1.875rem;
      border-top: 1px solid $border-color;
      .input-group {
        margin-bottom: .5rem;
        &-text {
          padding: 0 .5rem;
          background-color: transparent;
          border-right-width: 0;
        }
        .form-control {
          border-left-width: 0;
        }
        & + p {
          font-size: $font-size-sm;
          color: $gray-600
        }
      }
    }
    &-order {
      .price {
        font-size: 15px;
        margin-bottom: .5rem;
      }
    }
  }

  .option {
    > h4 {
      font-size: $font-size-base;
      margin-bottom: .5rem;
    }
    &-list {
      max-width: 400px;
      margin-bottom: 1.25rem;
      .row {
        margin-left: -4px;
        margin-right: -4px;
      }
    }
    &-item {
      height: 100%;
      padding: .5rem 1rem;
      border: 1px solid $primary;
      border-radius: $border-radius;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
  }

  .count {
    .input-group {
      &-text {
        background-color: transparent;
        cursor: pointer;
      }
    }
    .form-control {
      text-align: center;
    }
  }
  .add-to-cart {
    font-size: $h5-font-size;
    height: 100%;
  }
</style>
