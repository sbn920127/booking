<template>
  <header id="header">
    <div class="navbar navbar-expand-md">
      <div class="container">
        <nav class="collapse navbar-collapse flex-grow-0">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link">訂購</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link">購物車</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link">訂單</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" data-toggle="dropdown">更多</router-link>
              <div class="dropdown-menu">
                <router-link class="dropdown-item">品牌專區</router-link>
                <router-link class="dropdown-item">使用者條款</router-link>
                <router-link class="dropdown-item">隱私權條款</router-link>
                <router-link class="dropdown-item">信用卡條款</router-link>
                <router-link class="dropdown-item">意見回饋</router-link>
                <router-link class="dropdown-item">官方客服</router-link>
                <router-link class="dropdown-item">新手教學</router-link>
              </div>
            </li>
          </ul>
        </nav>
        <router-link class="navbar-brand mx-3">BOOKING</router-link>
        <div class="collapse navbar-collapse flex-grow-0">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link">通知</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link">登出</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" data-toggle="dropdown">
                <span class="avatar">avatar</span>
              </router-link>
              <div class="dropdown-menu dropdown-menu-right">
                <router-link class="dropdown-item">會員資料</router-link>
                <router-link class="dropdown-item">信用卡</router-link>
                <router-link class="dropdown-item">折價劵</router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss">

</style>
