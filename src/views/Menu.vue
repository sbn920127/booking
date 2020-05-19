<template>
  <div class="bg-light pt-4">
    <StoreInfo class="mb-5" />
    <div class="menu pb-5">
      <div class="container">
        <Masonry />
      </div>
    </div>
    <ProductModal modalId="ProductModal" />
  </div>
</template>

<script>

import StoreInfo from "../components/StoreInfo";
import Masonry from "../components/Masonry";
import ProductModal from "../components/ProductModal";
export default {
  name: 'Menu',
  components: {ProductModal, Masonry, StoreInfo}
}
</script>

<style lang="scss" scoped>

</style>
