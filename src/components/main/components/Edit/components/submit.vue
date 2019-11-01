<template>
<div id="submit">
  <el-button :plain="true" @click="open2" id="button">提交</el-button>

  </div>
</template>

<script>
  export default {
    methods: {

      open2() {
        this.$message({
          message: '提交成功',
          type: 'success'
        });
      },
    }
  }
</script>
<style lang="less" scoped>
#submit{
  text-align: center;
  margin-top: 20px;
 #button{
   background:  #20a0ff;
   color: #fff;
 }
}
</style>
