<template>
  <div class="box">
    首页
    <span>/</span>
    <span class="one">{{secondNav}}</span>
    <span class="one">{{thirdNav}}</span>
    <div class="pic">
      <img src="../images/default.jpg" alt />
      <div class="dispeare">
        <router-link to="/home" tag="p">首页</router-link>
        <router-link to="/" tag="p">退出</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../../router/index";
export default {
  props: ["secondNav", "thirdNav"],
  router
};
</script>
<style lang="less" scoped>
.box {
  width: calc(100% - 164);
  height: 60px;
  background-color: #eff2f7;
  color: #97a8be;
  font-size: 14px;
  padding-left: 20px;
  line-height: 60px;
  position: relative;
  span {
    margin: 0 8px;
    color: #bfcbd9;
  }
  span.one {
    &:hover {
      color: #20a0ff;
    }
  }
  .pic {
    width: 73px;
    height: 40px;
    float: right;
    &:hover .dispeare {
      //   display: block;
      height: 80px;
      padding: 10px 0;
    }
    .dispeare {
      width: 120px;
      height: 0px;
      background: white;
      box-shadow: 0 0 10px gray;
      text-align: center;
      position: absolute;
      right: 5px;
      top: 58px;
      overflow: hidden;
      transition: all 0.4s ease;
      z-index: 99;
      //   display: none;

      p {
        height: 30px;
        line-height: 30px;
        &:hover {
          background-color: #eff3f7;
        }
      }
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}
</style>