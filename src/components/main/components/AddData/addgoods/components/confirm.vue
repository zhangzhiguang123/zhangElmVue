<template>
  <div></div>
</template>

<script>
import router from "../../../../../../router/index";
export default {
  methods: {
    
  },
  mounted(){
      this.$confirm("添加食品需要选择一个商铺，先去就去选择商铺吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
           router.push({ path: 'businesslist' });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消"
          });
        });
      //改变提示框颜色
  }
};
</script>
<style lang="less" scoped>
.el-message--info{
    border-color: black;
}
</style>