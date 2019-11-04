<template>
  <div>
    <top :secondNav="nav1" :thirdNav="nav2"></top>
    <div class="hie"></div>
    <div style="margin-left:240px;">
    <user></user></div>
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
  }
};
</script>
<style lang="less" scoped>
.hie{
  height: 70px;
}
</style>


