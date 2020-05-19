<template>
  <div class="rating">
    <div class="rating-wrap">
      <i v-for="i in 5" :key="i" class="fas fa-star" :class="{active: i <= info.fraction}"></i>
    </div>
    <span class="ml-1">
      {{ info.fraction }}
      <template v-if="info.count > 0">
        ({{ info.count }})
      </template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'RatingMore',
  props: ['info']
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .rating {
    color: $gray-700;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &-wrap {
      margin-right: .25rem;
    }
  }
  .fa-star {
    color: $yellow;
    opacity: .5;
    &.active {
      opacity: 1;
    }
  }
</style>
