
<template>
  <div>
    <confirm></confirm>
    <topbar :secondNav="nav1" :thirdNav="nav2"></topbar>
    <choseFood></choseFood>
    <addfood></addfood>
  </div>
</template>
<script>
import topbar from "../../../../../common/components/top-bar";
import choseFood from "./components/choseFood";
import confirm from "./components/confirm";
import addfood from "./components/addFood";

export default {
  components: {
    topbar,
    choseFood,
    confirm,
    addfood
  },
  data() {
    return {
      nav1:"添加数据",
      nav2:"/ 添加商品",
    };
  }
};
</script>
<style lang="less" scoped>
</style>