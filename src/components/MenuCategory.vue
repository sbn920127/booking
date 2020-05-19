<template>
  <div class="category">
    <h4 class="category-title">{{ category.title }}</h4>
    <div class="nav flex-column">
      <div v-for="(item, j) in category.list" :key="j" class="nav-item nav-link" @click="openOptions">
        <div class="row no-gutters">
          <div class="item-name col">
            <h5 class="mb-0">{{ item.name }}</h5>
            <span v-if="item.soldOut" class="badge badge-danger ml-2">完售</span>
          </div>
          <div class="item-price col-auto">
            <div v-for="(price, k) in item.price" :key="k" class="price" :class="k" :title="k">
              <i v-if="k === 'hot'" class="fas fa-fire fa-fw"></i><i v-if="k === 'cold'" class="fas fa-snowflake fa-fw"></i>{{ price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuCategory',
  props: ['category'],
  methods: {
    openOptions() {
      this.$root.$modal.openModal('product');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .category {
    background-color: white;
    border-radius: $border-radius-lg;
    margin-bottom: 1.25rem;
    box-shadow: $box-shadow-sm;
    &-title {
      color: $primary;
      font-size: $h5-font-size;
      padding: 1.25rem 1rem 1rem;
      margin-bottom: 0;
    }
    .nav {
      &-item {
        border-bottom: 1px solid $border-color;
        &:last-child {
          border-width: 0;
        }
        h5 {
          font-size: $font-size-base;
        }
      }
      &-link {
        padding: 1rem 1rem;
        cursor: pointer;
      }
    }
    .item {
      &-name {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
      }
      &-price {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }
  .price {
    font-family: "Font Awesome 5 Free", sans-serif;
    margin-right: .75rem;
    &:last-child {
      margin-right: 0;
    }
    &.hot {
      color: $red;
    }
    &.cold {
      color: $blue;
    }
  }
</style>
