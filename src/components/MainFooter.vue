<template>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="info col-12 col-lg d-flex align-items-end">
          <div class="copyright">
            <h3>BOOKING</h3>
            <p>Copyright @2020 BOOKING All rights reserved</p>
          </div>
        </div>
        <div class="col-12 col-lg">
          <div class="row">
            <div class="col">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">首頁</router-link>
                </li>
                <li class="nav-item"><a href="" class="nav-link">意見回饋</a></li>
                <li class="nav-item"><a href="" class="nav-link">官方客服</a></li>
              </ul>
            </div>
            <div class="col">
              <ul class="nav flex-column">
                <li class="nav-item"><a href="" class="nav-link">使用者條款</a></li>
                <li class="nav-item"><a href="" class="nav-link">隱私權條款</a></li>
                <li class="nav-item"><a href="" class="nav-link">信用卡條款</a></li>
              </ul>
            </div>
            <div class="media-menu col-auto">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a href="" class="nav-link h4"><i class="fab fa-facebook-square"></i></a>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link h4"><i class="fab fa-line"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'MainFooter'
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  #footer {
    padding: 50px 0
  }
  .copyright {
    p {
      margin-bottom: .5rem;
    }
  }
  .nav {
    &-link {
      color: $body-color;
      &:hover {
        color: $primary;
      }
    }
  }
  .media-menu {
    .nav-link {
      margin-bottom: 0;
    }
  }
  @include media-breakpoint-down(md) {
    .info {
      order: 1;
      margin-top: 30px;
    }
  }
</style>
