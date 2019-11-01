<template >
<div>
   <Modal ref="mymodal"></Modal>
   
  <div class="box">
      <span>优惠活动</span>
    <div class="div">
      <el-select v-model="value" placeholder="请选择" @change="openModal">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
  </div>
</template>
<script>
import Modal from "./Modal.vue"
export default {
  components:{
    Modal
  },
 methods:{
     openModal(){
         this.$refs.mymodal.isShow()
          this.$refs.mymodal.open()
         
     }
 },
  data() {
    return {
       
      options: [
        {
          value: "选项1",
          label: "满减优惠"
        },
        {
          value: "选项2",
          label: "优惠大酬宾"
        },
        {
          value: "选项3",
          label: "新用户立减"
        },
        {
          value: "选项4",
          label: "进店领劵"
        }
      ],
      value: "满减优惠"
    };
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
  margin-top: 1130px;
}
.div{
    margin-left: 1.5%;
}
span{
    position: absolute;
    left: -10%;
    top:35%;
    font-size: 14px;
}

</style>


