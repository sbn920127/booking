<template>
  <div class="rating">
    <i class="fas fa-star mr-1"></i>
    <span>{{ num }}</span>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['num']
}
</script>

<style lang="scss">
  @import "../assets/scss/base";

  .rating {
    color: $yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: $gray-700;
    }
  }
</style>
