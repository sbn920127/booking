<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      text: 'test'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
