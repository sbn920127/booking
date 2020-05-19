<template>
  <div ref="modal" v-if="!isHidden" class="modal-outer">
    <transition name="zoom">
      <div v-if="isShow" class="modal-inner">
        <div class="modal">
          <button class="btn close" @click="closeModal"><i class="fas fa-times"></i></button>
          <h1 v-if="!hideHeader" class="modal-title" :class="headerClass">
            <slot name="title">title</slot>
          </h1>
          <div class="modal-content" :class="contentClass">
            <slot name="content">content</slot>
          </div>
          <div v-if="!hideFooter" class="modal-footer" :class="footerClass">
            <slot name="footer">footer</slot>
          </div>
        </div>
      </div>
    </transition>
    <div v-if="!hideBackdrop" class="backdrop"></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalId: {
      type: [String, Array, Object]
    },
    headerClass: {
      type: [String, Array, Object]
    },
    contentClass: {
      type: [String, Array, Object]
    },
    footerClass: {
      type: [String, Array, Object]
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      hideBackdrop: true,
      isHidden: true
    }
  },
  methods: {
    closeModal() {
      this.isShow = false;
      setTimeout(() => this.hideBackdrop = true, 400);
      setTimeout(() => this.isHidden = true, 500);
    },
    openModal(id) {
      if (id === this.target) {
        this.hideBackdrop = false;
        this.isHidden = false;
        setTimeout(() => this.isShow = true, 100);
      }
    }
  },
  mounted() {
    let keys = Object.keys(this.$root);

    if(keys.indexOf('$modals') === -1) {
      this.$root.$modals = {};
    }

    if (keys.indexOf('$bvmodal') === -1) {
      this.$root.$bvmodal = {
        open: (id) => {
          this.$root.$modals[id].openModal()
        }
      };
    }
    console.log(this.$root, keys.indexOf('$modals'));
    // if(!this.$root.hasOwnProperty('$modals')) {
    //   this.$root.$modals = {};
    // }
    // if(!this.$root.hasOwnProperty('$bvmodal')) {
    //   this.$root.$bvmodal = {
    //     open: (id) => {
    //       this.$root.$modals[id].openModal()
    //     }
    //   };
    // }

  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/base";

  .modal {
    background-color: white;
    min-width: 400px;
    max-width: 560px;
    position: relative;
    border-radius: $border-radius;
    &-outer {
      position: absolute;
      z-index: 1071;
    }
    &-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
    }
    .close {
      color: white;
      width: 38px;
      height: 38px;
      text-align: center;
      position: absolute;
      top: 11px;
      right: 10px;
      background-color: $red;
      border-radius: 50%;
    }
    &-title {
      font-size: $h4-font-size;
      padding: 1rem 58px 1rem 1.25rem;
      margin-bottom: 0;
    }
    &-content {
      max-height: 500px;
      overflow: auto;
      min-height: 350px;
      padding: .5rem 1.25rem;
    }
    &-footer {
      padding: 1rem 1.25rem;
      border-top: 1px solid $border-color;
    }
  }
  .backdrop {
    background-color: rgba(black, .5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .zoom-enter, .zoom-leave-to {
    transform: scale(0);
  }

  .zoom-enter-active, .zoom-leave-active {
    transition: transform .5s ease;
  }
</style>
