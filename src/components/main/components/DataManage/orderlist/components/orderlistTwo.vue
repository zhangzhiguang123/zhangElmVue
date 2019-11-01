<template>
 <el-table-column type="expand">
          <template slot-scope="orderlistOne">
            <el-form
              label-position="left"
              inline
              class="demo-table-expand"
              :data="orderlistOne.row"
            >
              <el-form-item label="用户名">
                <span>{{ orderlistOne.row._id }}</span>
              </el-form-item>

              <el-form-item label="店铺名称">
                <span>{{ orderlistOne.row.restaurant_name }}</span>
              </el-form-item>

              <el-form-item label="收货地址">
                <span>{{ orderlistOne.row.total_quantity }}</span>
              </el-form-item>

              <el-form-item label="店铺 ID">
                <span>{{ orderlistOne.row.id }}</span>
              </el-form-item>

              <el-form-item label="店铺地址">
                <span>{{ orderlistOne.row.time_pass }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>


</template>

<style lang="less" scoped>

.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>