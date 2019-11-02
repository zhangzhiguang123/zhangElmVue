<template>
  <div id="box">
    <p>选择食品种类</p>
    <form action>
      <div class="oflex">
        <span id="food">食品种类</span>
        <ofoodtype></ofoodtype>
        <div class="sub" ref="sub" :class="{show:isshow}">
          <span style=" padding: 0 20px;">食品种类</span>
          <input type="text" />
          <br />
          <span style=" padding: 0 20px;">种类描述</span>
          <input type="text" />
          <br />
         <el-button type="primary" @click="submit">提交</el-button>
        </div>

        <div class="click" @click="moveHeight">
          <span :class="{trans:show}"></span>
          添加食品种类
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="less" scoped>
input:hover{
      border: 1px solid#A9A9A9;
}
.oflex{
  padding-top: 20px;
  #food{
  float: left;
  margin-left: 30px;
  margin-top: 10px;
  font-size: 16px;
}
}

#box {
  form {
    width: 604px;
    margin: 0 auto;
    border: 1px solid #eaeefb;
  }
  width: 100%;
  height: auto;
  font-size: 18px;
  font-family: "Microsoft Yahei", sans-serif;
  //   background: pink;
  text-align: center;
  // overflow:auto ;
  .click {
    height: 42px;
    width: 604px;
    margin: 0 auto;
font-size: 14px;
    color: #999;
    border-top: none;
    line-height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: #20a0ff;
    }
    &:hover span {
      background-image: url("../../images/blue.png");
    }
    span {
      width: 32px;
      height: 32px;
      display: inline-block;
      background-image: url("../../images/sanjiao.png");
      transition: all 0.5s ease;
      &.trans {
        transform: rotate(180deg);
      }
    }
  }
  .sub {
    width: 604px;
    height: 200px;
    border: 1px solid #eaeefb;
    border-top: none;
    border-bottom: none;
    margin: 0 auto;
    font-size: 16px;
    overflow: hidden;
    transition: all 0.5s ease;
    &.show {
      height: 0px;
    }
    button {
      background: #20a0ff;
      float: left;
      margin-left: 120px;
      margin-top: 20px;
    }
    input {
      width: 455px;
      padding-left: 20px;
      height: 36px;
      margin-top: 20px;
      border: 1px solid #bfcbd9;
      outline: 0;
      border-radius: 4px;
    }
  }

  p {
    font-size: 20px;
    padding: 20px;
  }
  .sel {
    width: 604px;
    height: 80px;
    margin: 0 auto;
    border: 1px solid #eaeefb;
    padding: 10px 0px 10px 10px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    display: flex;
    span {
      width: 100px;
    }
    #opic {
      width: 32px;
      height: 32px;
      padding: 0;
      background-image: url("../../images/sanjiao.png");
      position: relative;
      top: 5px;
      left: -30px;
      transition: all 0.5s ease;
      &.trans {
        transform: rotate(180deg);
      }
    }
  }
  select {
    width: 480px;
    height: 40px;
    border: 1px solid #bfcbd9;
    outline: 0;
    border-radius: 4px;
    position: relative;
    left: 10px;
    appearance: none;
  }
}
</style>
<script>
import { getFoodlist } from "@/api/axios";
import ofoodtype from "./foodtype";
export default {
  components: {
    ofoodtype
  },
  methods: {
    moveHeight() {
      this.show = !this.show;
      this.isshow = !this.isshow;
    },
    orotate() {
      this.rotate = !this.rotate;
    },
    submit(){

    },
  },
  data() {
    return {
      optList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      isshow: true,
      show: false,
      rotate: false
    };
  },
  async created() {
    this.optList = await getFoodlist();
    window.console.log(this.optList);
  }
};
</script>