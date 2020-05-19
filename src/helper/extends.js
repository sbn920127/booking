import Vue from 'vue'

export const slideShow = Vue.extend({
  data() {
    return {
      count: 0,
      className: {
        active: [1],
        left: null,
        next: null,
        right: null,
        prev: null,
      },
      lock: false
    }
  },
  methods: {
    counter(slides, destroyed = null) {
      if (destroyed) {
        clearInterval(start);
        return;
      }
      const vm = this;
      const length = slides.length - 1;

      let start = setInterval(function () {
        if (vm.count >= length) {
          vm.count = 0;
        } else {
          vm.count++;
        }
        vm.showing(vm.count);
      }, 4000);
    },
    showing(index) {
      if(this.lock) return
      this.lock = true;

      let start1, start2, dir1, dir2, del, _this = this;
      const className = this.className;
      let prev = className.active[0];

      clearTimeout(start1);
      clearTimeout(start2);


      this.count = index;

      if (index === prev ) {
        this.lock = false;
        return;
      } else if (index < prev) {

        dir1 = "prev";
        dir2 = "right";
      } else {
        dir1 = "next";
        dir2 = "left";
      }

      className[dir1] = index;
      className.active.push(index);

      start1 = setTimeout(function () {
        className[dir1] = null;
        className[dir2] = prev;
      }, 10);

      start2 = setTimeout(function () {
        del = className.active.indexOf(prev);
        className[dir2] = null;
        className.active.splice(del,1);
        _this.lock = false;
      }, 600);
    }
  },
  destroyed() {
    this.counter(null, true);
  }
});
