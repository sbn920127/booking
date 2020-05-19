<template>
  <div class="about">
    <div class="container">
      <input type="text" v-model="show">
      <button @click="openModal">Open</button>
      <Product />
    </div>
  </div>
</template>

<script>
  import Product from "../components/ProductModal";
  export default {
    name: 'name',
    components: {Product},
    data() {
      return {
        show: "button",
      }
    },
    watch: {
      show(val) {
        console.log(val);
      }
    },
    methods: {
      openModal() {
        this.$root.$modal.openModal()
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  @import "../assets/scss/base";

  .fade-enter-active, fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
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
  .remarks {
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

  .product-info {
    .price {
      font-size: 15px;
      margin-bottom: .5rem;
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
