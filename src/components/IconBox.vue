<template>
  <div class="icon-box">
    <div class="icon-box-wrap">
      <div class="icon-box-img" :style="info.style"></div>
    </div>
    <p>{{ info.text }}</p>
  </div>
</template>

<script>
  export default {
    name: 'IconBox',
    props: ['info']
  }
</script>

<style lang="scss">
  .icon-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .75rem 0;
    p {
      margin-bottom: 0;
    }
    &-wrap {
      width: 50px;
      padding: 10px;
      background-color: white;
      border-radius: 50%;
      margin-bottom: .25rem;
    }
    &-img {
      width: 30px;
      height: 30px;
      background: transparent no-repeat center center / cover;
    }
  }
</style>
