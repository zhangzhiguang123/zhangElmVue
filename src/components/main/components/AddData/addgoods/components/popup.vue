<template>
  <div id="box" v-show="show">
    <div class="point">
      <div class="pop">
        <i @click="none"></i>
        <p>添加规格</p>
        <span>规格</span>
        <input ref="inp1"  type="text" name id />
        <br />
        <span id="bao">包装费</span>
        <opack id="op" ref="inp2"></opack>
        <span id="bao">价格</span>
        <opack id="op" ref="inp3"></opack>
        <el-button type="primary"  @click="sendMsg">确认</el-button>
        <el-button plain @click="none">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import opack from "./pack";
export default {
  data() {
    return {
      show: false,
      inpVal: [],
      pack: "",
      price: ""
    };
  },
  methods: {
    none() {
      this.show = !this.show;
    },
    sendMsg() {
      //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
      this.inpVal = [];
      this.inpVal.push(this.$refs.inp1.value);
      this.inpVal.push(this.$refs.inp2.num1);
      this.inpVal.push(this.$refs.inp3.num1);
      this.$emit("func", this.inpVal);
      this.show = !this.show;
    }
  },
  components: {
    opack
  }
};
</script>
<style lang="less" scoped>
#box {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
}
button {
  float: right;
  margin-right: 20px;
  position: relative;
  top: 40px;
}
.point {
  i {
    width: 32px;
    height: 32px;
    display: block;
    background: pink;
    position: absolute;
    right: 25px;
  }
  position: absolute;
  left: 40%;
  top: 55%;
  p {
    float: left;
  }
  span {
    padding: 0 20px;
    position: relative;
    right: 70px;
  }
  span#bao {
    position: relative;
    right: 255px;
    top: 30px;
  }
  #op {
    position: relative;
    right: 130px;
  }
  input {
    width: 435px;
    height: 36px;
    margin-top: 50px;
    border: 1px solid #bfcbd9;
    outline: 0;
    border-radius: 4px;
    position: relative;
    right: 70px;
    padding-left: 20px;
  }
}
.pop {
  width: 770px;
  height: 330px;
  position: absolute;
  left: -250px;
  top: -250px;
  background: white;
  box-shadow: 0 0 5px gray;
  padding: 20px;
}
</style>