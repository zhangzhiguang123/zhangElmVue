<template>
  <div id="box">
    <p>外卖后台管理系统</p>
    <div class="box">
      <input type="text" placeholder="用户名" />
      <br />
      <input type="text" placeholder="输入密码" />
      <br />
      <router-link to="/home" tag="button">登陆</router-link>
      <span>温馨提示</span>
      <br />
      <span>未登录过的新用户，自动注册</span>
      <br />
      <span>注册过的用户可凭账号密码登录</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowUser: true,
      isShowPwd: true
    };
  },
  mounted(){
     document.body.style.background = "#324057";
  },
  beforeDestroy(){
    document.body.style.background = "#fff";
  }
};
</script>

<style scoped>
.el-scrollbar__view{
  height: 100%;
}
p {
  position: absolute;
  top: 35%;
  left: 54%;
  margin-top: -105px;
  margin-left: -160px;
  color: #fff;
  font-size: 34px;
}
.box {
  width: 370px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -105px;
  margin-left: -160px;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
}
.box input {
  background-image: none;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  height: 36px;
  width: 320px;
  line-height: 36px;
  box-sizing: border-box;
  padding: 3px 10px;
  color: #1f2d3d;
  background: #20a0ff;
  background-color: #fff;
  margin-bottom: 20px;
}
.box button {
  width: 320px;
  height: 38px;
  line-height: 20px;
  color: #fff;
  background-color: #20a0ff;
  margin-bottom: 10px;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 4px;
  margin-top: 5px;
  border: 1px solid #20a0ff;
}
.box span {
    line-height: 17px;
  color: red;
  font-size: 12px;
}
</style>