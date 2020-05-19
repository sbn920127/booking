<template>
  <div class="bg-light pt-4">
    <div class="cart-list pb-5">
      <div class="container">
        <div class="row">
          <div v-for="i in 10" :key="i" class="col-12 col-md-6 col-lg-4">
            <CartCard />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import CartCard from "../components/CartCard";
  export default {
    name: 'Cart',
    components: {CartCard},
  }
</script>

<style lang="scss" scoped>

</style>
