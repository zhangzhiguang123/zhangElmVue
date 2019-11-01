<template>
  <div class="box">
    <span class="head">店铺特点</span>
  <ul class="u1">
      <li><p> <span>品牌保证</span> <el-switch v-model="value1" ></el-switch></p></li>
      <li><p> <span>蜂鸟专送</span> <el-switch v-model="value2" ></el-switch></p></li>
      <li><p> <span>新开店铺</span> <el-switch v-model="value3" ></el-switch></p></li>
  </ul><br>
  
  <ul class="u2">
      <li><p> <span>外卖保</span> <el-switch v-model="value4" ></el-switch></p></li>
      <li><p> <span>准时达</span> <el-switch v-model="value5" ></el-switch></p></li>
      <li><p> <span>开发票</span> <el-switch v-model="value6" ></el-switch></p></li>
  </ul>

<div id="div">
    <div class="div">
  <span>配送费</span>
     <el-input-number v-model="num1" controls-position="right"  :min="0" :max="20"></el-input-number><br>
  </div>

  <div class="div">
  <span>起送价</span>
    <el-input-number v-model="num2" controls-position="right"  :min="0" :max="100"></el-input-number>
    </div>
</div>

  </div>
</template>
<script>
export default {
     data() {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: true,
        value6: true,
        num1:5,
        num2:20
      }
    }
};
</script>
<style lang="less" scoped>

.box {
  width: 570px;
  height: auto;
  position: absolute;
  left: 20%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 400px;
}
.head{
    margin-left: -9%;
    font-size: 14px;
}
.u1{
    width: 350px;
    height: 40px;
    margin-top: -15px;
    margin-left: 20px;
    li{
        float: left;
        margin-right: 10px;
    }
}

.u2{
    width: 100%;
    height: 40px;
    margin-top: -15px;
    margin-left: 20px;
    li{
        float: left;
        margin-right: 10px;
    }
}
span{
    font-size: 14px;
}
#div{
    margin-left: -9%;
    span{
        margin-right: 3%;
        
    }
    .div{
        margin-bottom: 5%;
    }
}
</style>


