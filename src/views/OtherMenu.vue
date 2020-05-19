<template>
  <div class="other-menu bg-light">
    <ul class="nav flex-column align-items-center">
      <li class="nav-item"><a href="" class="nav-link">品牌專區</a></li>
      <li class="nav-item"><a href="" class="nav-link">使用者條款</a></li>
      <li class="nav-item"><a href="" class="nav-link">隱私權條款</a></li>
      <li class="nav-item"><a href="" class="nav-link">信用卡條款</a></li>
      <li class="nav-item"><a href="" class="nav-link">意見回饋</a></li>
      <li class="nav-item"><a href="" class="nav-link">官方客服</a></li>
      <li class="nav-item"><a href="" class="nav-link">新手教學</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'OtherMenu'
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .other-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 154px);
  }
  .nav {
    width: 50%;
    max-width: 300px;
    margin-top: -20px;
    &-item {
      width: 100%;
    }
    &-link {
      text-align: center;
      padding: 20px 15px;
    }
  }
</style>
