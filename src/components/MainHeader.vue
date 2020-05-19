<template>
  <header id="header">
    <div class="navbar navbar-expand-md">
      <div class="container">
        <nav class="collapse navbar-collapse flex-grow-0" :style="menuWidth">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">訂購</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link">購物車</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">訂單</a>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">更多</a>
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item">品牌專區</a>
                <a href="#" class="dropdown-item">使用者條款</a>
                <a href="#" class="dropdown-item">隱私權條款</a>
                <a href="#" class="dropdown-item">信用卡條款</a>
                <a href="#" class="dropdown-item">意見回饋</a>
                <a href="#" class="dropdown-item">官方客服</a>
                <a href="#" class="dropdown-item">新手教學</a>
              </div>
            </li>
          </ul>
        </nav>
        <router-link to="/" class="navbar-brand mx-auto">BOOKING</router-link>
        <div class="collapse navbar-collapse flex-grow-0 justify-content-end" :style="menuWidth">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link">通知</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">登出</a>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="avatar-toggle nav-link dropdown-toggle" data-toggle="dropdown">
                <Avatar />
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a href="#" class="dropdown-item">會員資料</a>
                <a href="#" class="dropdown-item">信用卡</a>
                <a href="#" class="dropdown-item">折價劵</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Avatar from "./Avatar";

  export default {
    name: 'MainHeader',
    components: {Avatar},
    data() {
      return {
        menuWidth: {
          width: null
        }
      }
    },
    methods: {
      setMenuSize() {
        let menus = document.querySelectorAll('#header .collapse');
        let widths = Array.from(menus).map(item => item.clientWidth);
        let max = Math.max(...widths);
        // let index = widths.indexOf(max);
        this.menuWidth.width = max + 'px';


        // menus[index].clientWidth = max + 'px';
      }
    },
    mounted() {
      this.setMenuSize();
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .navbar-brand {
    font-weight: bold;
  }

  .nav-link:not(.avatar-toggle) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .avatar-toggle {
     display: flex;
     align-items: center;
     &:hover {
       background-color: $gray-100;
     }
  }


</style>
