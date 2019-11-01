<template>
  <div>
    <topbar></topbar>
    <user></user>
  </div>
</template>
<script>
import user from "./components/user.vue";
import topbar from "../../../../common/components/top-bar.vue";
export default {
  components: {
    user,
    topbar
  }
};
</script>
<style lang="less" scoped>

</style>


