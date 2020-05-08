<template>
  <div class="card mb-4">
    <div class="card-img">
      <img class="rounded img-fluid" src="https://picsum.photos/seed/picsum/800/460">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <div class="card-tag">
        <span class="badge badge-secondary">{{ tags.open }}</span>
        <span class="badge badge-secondary">{{ tags.distance }}</span>
        <span class="badge badge-secondary"><Rating :num="tags.rating" /></span>
      </div>
      <p class="card-text">台北市中正區忠孝東路一段11號</p>
      <ul v-if="service.length" class="service nav">
        <li class="nav-item">
          <img class="img-fluid" src="../assets/img/010-drink.png" alt="飲料">
        </li>
        <li class="nav-item">
          <img class="img-fluid" src="../assets/img/011-rice.png" alt="正餐">
        </li>
        <li class="nav-item">
          <img class="img-fluid" src="../assets/img/012-motorbike.png" alt="外送">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Rating from "./Rating";
export default {
  name: 'Card',
  components: {Rating},
  props: ['title', 'tags', 'address', 'service',]
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/var";
  .card {
    &-tag {
      margin-bottom: .75rem;
      > .badge {
        color: $gray-800;
        background-color: $gray-200;
        margin-right: .5rem;
      }
    }
    &-text {
      color: $gray-700
    }
  }
  .service {
    .nav-item {
      > img {
        width: 24px;
        height: 24px;
        padding: .25rem;
      }
    }
  }
</style>
