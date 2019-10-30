<template>
  <div>
    <topbar></topbar>
    <div class="data">数据统计</div>
    <reactive1></reactive1>
    <reactive2></reactive2>

    <trend></trend>
  </div>
</template>
<script>
import topbar from "../../../../common/components/top-bar.vue";
import trend from "./components/trend-chart.vue";
import reactive1 from "./components/reactive1.vue";
import reactive2 from "./components/reactive2.vue";


export default {
  components: {
    topbar,
    trend,
  reactive1,
  reactive2,

  }
};
</script>
<style lang="less" scoped>
.data {
  font-size: 38px;
  text-align: center;
  padding-top: 30px;
}
</style>