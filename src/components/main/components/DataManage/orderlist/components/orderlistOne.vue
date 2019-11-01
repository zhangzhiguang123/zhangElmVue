<template>
  <div class="table_orderlist">
    <div>
      <el-table
        v-loading="loading"
        :data="orderlist.slice((currpage - 1) * pagesize, currpage * pagesize)"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >

         <orderlistTwo></orderlistTwo>

        <el-table-column label="订单 ID" property="id"></el-table-column>

        <el-table-column label="总价格" property="total_amount"></el-table-column>

        <el-table-column label="订单状态" property="status_bar.title"></el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next, sizes, total, jumper"
        :page-sizes="[5, 10, 15, 20]"
        :total="orderlist.length"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { getOrderList } from "@/api/axios";
import orderlistTwo from "./orderlistTwo";
export default {
  data() {
    return {
      orderlist: [],
      pagesize: 20,
      currpage: 1,
      loading: false
    };
  },
  components: {
    orderlistTwo
  },
  async created() {
   this.orderlist = await getOrderList();
 
   
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
.table_orderlist {
  padding: 20px;
}
</style>