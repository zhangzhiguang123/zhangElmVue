<template>
  <!-- 管理员信息 -->
  <div id="app">
    <el-table
      :data="obj.slice((currpage - 1) * pagesize, currpage * pagesize)"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="index" widht="100px" label="排序"></el-table-column>
      <el-table-column property="user_name" label="姓名"></el-table-column>
      <el-table-column property="create_time" label="注册日期"></el-table-column>
      <el-table-column property="city" label="地址"></el-table-column>
      <el-table-column property="admin" label="权限"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, sizes, total, jumper"
      :page-sizes="[5, 10, 15, 20]"
      :total="obj.length"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </div>
</template>
<script>
import { getAdminIin } from "@/api/adminsison.js";
export default {
  data() {
    return {
      obj: [],
      pagesize: 20,
      currpage: 1
    };
  },
  async created() {
   this.obj = await getAdminIin();
   
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },
    handleSelectionChange(val) {
      window.console.log(val);
    }
  }
};
</script>
<style lang="less" scoped>

#app {
  width: 90%;
  margin: auto;
}
.el-table td {
  padding: 0;
}
.el-pagination {
  text-align: right;
}
</style>