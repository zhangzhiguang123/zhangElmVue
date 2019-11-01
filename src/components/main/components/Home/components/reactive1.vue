<template>
  <div class="center">
    <el-row :gutter="10">
      <el-col :span="6">
        <div
          class="grid-content bg-purple"
          style="background:#FF9800;font-size:24px;color:white"
        >当日数据：</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <span style="font-size:26px">
            {{userCount}}
            </span>
          新增用户
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <span>
            {{orderCount}}
            </span>
          新增订单
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <span>
            {{adminCount}}
            </span>
          新增管理员
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import axios from "axios";
import { getUserCount, getOrderCount, getAdminCount } from "@/api/homeAxios";

export default {
  data() {
    return {
      userCount: "",
      orderCount: "",
      adminCount: ""
    };
  },
  async created() {
    this.userCount = await getUserCount();
    this.userCount = this.userCount.count;

    this.orderCount = await getOrderCount();
    this.orderCount = this.orderCount.count;

    this.adminCount = await getAdminCount();
    this.adminCount = this.adminCount.count;  
  }
};
</script>

<style lang="less" scoped>
span {
  font-size: 26px;
}
.el-row {
  width: 70%;
  padding: 20px;
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
 
