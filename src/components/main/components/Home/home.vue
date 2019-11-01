<template>
  <div>
    <topbar></topbar>
    <div class="odata">数据统计</div>
    <reactive1></reactive1>
    <reactive2></reactive2>
    <div id="box">
      <span class="s1"></span>
      <span class="s2"></span>
      <span class="s3"></span>
      <span class="s4" @click="change"></span>
      <span class="s5" @click="changes"></span>
      <span class="s6"></span>
    </div>
    <trend v-show="show"></trend>
    <ochart v-show="isshow"></ochart>
  </div>
</template>
<style lang="less" scoped>
.odata{
  font-size: 38px;
  text-align: center;
  padding-top: 30px;
}
#box {
  width: 210px;
  height: 50px;
  position: relative;
  left: 900px;
  top: 40px;
  span {
    margin-left: 10px;
  }
  span.s1 {
    width: 24px;
    height: 24px;
    display: inline-block;
    background: url(./images/suo.png);
    background-size: cover;
  }
  span.s2 {
    width: 24px;
    height: 24px;
    display: inline-block;
    background: url(./images/quyu.png);
    background-size: cover;
  }
  span.s3 {
    width: 24px;
    height: 24px;
    display: inline-block;
    background: url(./images/wenjian.png);
    background-size: cover;
  }
  span.s4 {
    width: 24px;
    height: 24px;
    display: inline-block;
    background: url(./images/shuju.png);
    background-size: cover;
  }
  span.s5 {
    width: 24px;
    height: 24px;
    display: inline-block;
    background: url(./images/zhe.png);
    background-size: cover;
  }
  span.s6 {
    width: 24px;
    height: 24px;
    display: inline-block;
    background: url(./images/huanyuan.png);
    background-size: cover;
  }
}
</style>
<script>
import topbar from "../../../../common/components/top-bar.vue";
import trend from "./components/trend-chart.vue";
import reactive1 from "./components/reactive1.vue";
import reactive2 from "./components/reactive2.vue";
import ochart from "./components/chart";

export default {
  components: {
    topbar,
    trend,
    reactive1,
    reactive2,
    ochart
  },
  data() {
    return {
      isshow: false,
      show:true,
    };
  },
  methods: {
    change() {
      this.isshow = true;
      this.show=false;
    },
    changes() {
      this.show =true;
      this.isshow=false;
    }
  }
};
</script>