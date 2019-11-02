
<template>
  <div class="table_container">
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="userList.slice((currpage - 1) * pagesize, currpage * pagesize)"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="index" width="100" label="序号" align="center" sortable></el-table-column>
      <el-table-column property="registe_time" label="注册日期" width="250"></el-table-column>
      <el-table-column property="username" label="用户姓名" width="250"></el-table-column>
      <el-table-column property="city" label="注册地址" width="250"></el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next, sizes, total, jumper"
      :page-sizes="[5, 10, 15, 20]"
      :total="userList.length"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    ></el-pagination>
  </div>
</template>
<script>
import { getUserCounts } from "@/api/axios";
export default {
  data() {
    return {
      userList: [],
      pagesize: 20,
      currpage: 1,
      loading: false
    };
  },

  async created() {
    this.userList  = await getUserCounts();
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
.is-leaf {
  font-size: 16px;
}

.table_container {
  padding: 20px;
  font-size: 14px;
}
.is-leaf {
  color: aqua;
}
</style>