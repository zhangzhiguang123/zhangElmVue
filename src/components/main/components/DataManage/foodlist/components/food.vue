<template>
    <div class="add" v-if="isShow">
        <div class="nr">
            <div class="inp">
                <input type="text" ref="nr"><i>输入信息</i>
            </div>
        <div class="one">
             <el-input-number v-model="num" @change="handleChange" :min="0" :max="100" label="描述文字"></el-input-number>
        </div>
        <div class="two">
             <el-input-number v-model="num1" @change="jiaqian" :min="0" :max="10000" label="描述文字"></el-input-number>
        </div>
           
    <div class="el_button">
    <el-row>
    <el-button type="danger" round @click="tj">添加</el-button>
    <el-button type="danger" round @click="yincang">取消</el-button>
    </el-row>
    </div>

 </div>
        
         
    </div>
</template>
<script>
import che from "@/assets/che.js"
// import foodlisTedit from "./foodlisTedit"
export default {
    data(){
        return{
            num: 2,
            num1:20,
     isShow:false,
        }
    },
    methods:{
          open2() {
       
      },
         xianshi() {
                this.isShow = true;
             },
      
	tj(){
    // window.console.log(this.$refs.nr.value);
     
          this.$message({
            type: 'success',
            message: '添加成功!'
          });

    che.$emit("che",this.$refs.nr.value)
    che.$emit("add");
    this.yincang()     
    },
    yincang() {
            this.isShow = false;  
        },
    handleChange(value) {
    //    window.console.log(value);
        che.$emit("h",value)
      },
      jiaqian(value){
          che.$emit("j",value)
      }
    },
    components:{
        // foodlisTedit
    }
}
</script>
<style lang="less" scoped>
.inp{
    input{
        border-radius: 5px;
        margin-left: 45px;
        margin-top: 20px;
        height: 35px;
        width: 200px;
    }
    i{
        font-size: 18px;
        padding-left: 30px;
    }
}
.el_button{
    height: 200px;
    width: 200px;
    position: relative;
  right: -55%;
bottom: -40%;
}
.one{
    position: relative;
    top: 20%;
    left: 25%;
}
.two{
    position: relative;
    top:30%;
    left: 25%;
}
.add{
   height: 100%;
    width: 100%;
    background-color: rgba(87, 84, 84, 0.7);
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .nr{
 height: 300px;
  width: 400px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
    }
}
</style>