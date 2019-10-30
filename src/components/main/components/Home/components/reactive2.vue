<template>
  <div class="center">
    <el-row :gutter="10">
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          style="background: #20A0FF;font-size:24px;color:white"
        >总数据：</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">注册用户</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">订单</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">管理员</div>
      </el-col>
    </el-row>
  </div>
</template>


<style lang="less" scoped>
.el-row {
  width: 70%;
  padding: 0 0 0 20px;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #e5e9f2;
}
.bg-purple {
  background: #e5e9f2;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>>
 
