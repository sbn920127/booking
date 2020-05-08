<template>
  <div class="rating">
    <i class="fa fa-star fa-fw mr-1 " aria-hidden="true"></i>{{ num }}
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: ['num']
}
</script>

<style lang="scss">
  .rating {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
