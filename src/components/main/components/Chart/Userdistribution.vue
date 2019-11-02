<template>
  <div>
    <top :secondNav="nav1" :thirdNav="nav2"></top>
    <topbar></topbar>
    <user></user>
  </div>
</template>
<script>
import user from "./components/user.vue";
import top from "../../../../common/components/top-bar.vue";
export default {
  components: {
    user,
    top
  },
  data() {
    return {
      nav1: "设置",
      nav2: "/ 管理员设置"
    };
  },

};
</script>
<style lang="less" scoped>

</style>


