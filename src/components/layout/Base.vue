<template>
  <div class="style-1">
    <Progress />
    <MainHeader />
    <MainMenuMd v-if="!isMdUp" />
    <router-view></router-view>
    <MainFooter v-if="isMdUp" />
  </div>
</template>

<script>
  import MainHeader from "../MainHeader";
  import MainFooter from "../MainFooter";
  import MainMenuMd from "../MainMenuMd";
  import Progress from "../Progress";
  export default {
    name: 'Base',
    components: {Progress, MainMenuMd, MainFooter, MainHeader},
    computed: {
      isMdUp() {
        return this.$store.state.isMdUp;
      }
    }
  }
</script>

<style lang="scss">

</style>
