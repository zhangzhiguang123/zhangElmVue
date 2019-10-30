<template>
  <div  class="table_orderlist">
    <div>
      <el-table   style="width: 100%">

        <el-table-column 
        label="订单 ID" 
        prop="">
        </el-table-column>

        <el-table-column
         label="总价格"
         prop=""
        ></el-table-column>

          <el-table-column
         label="订单状态"
         prop=""
        ></el-table-column>

      </el-table>
    </div>
  </div>
</template>
<script>
//  import {getOrderList} from "@/api/orderlist"
 export default {
     data(){
       return {
           orderlist:[]
       }  
     }
 }

</script>

<style lang="less" scoped>
 .table_orderlist{
    padding: 20px;
 }
</style>