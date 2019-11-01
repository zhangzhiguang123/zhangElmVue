<template id="modal">
    <div>
        <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            show: false,
        }
    },
   
    methods:{
       isShow() {
          this.show=true
        },
         open() {
        this.$prompt('请输入活动详情', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[a-zA-Z0-9_\u4e00-\u9fa5]+/,
          inputErrorMessage: '请输入正确内容'
        }).then(({value}) => {
            this.$message({
            type: 'success',
            message: '创建成功',
          });
            window.console.log(value)
           
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    }
}
</script>
<style lang="less" scoped>
   
</style>


