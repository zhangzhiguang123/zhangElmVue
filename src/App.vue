<template>
  <div>
    <el-scrollbar>
      <router-view></router-view>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>
<style lang="less" scoped>
div {
  height: 100%;
  el-scrollbar { //去除滚动条
    height: 100%;
  }
}
.el-scrollbar__wrap {
  //去除横向滚动条
  overflow-x: hidden;
}
</style>
