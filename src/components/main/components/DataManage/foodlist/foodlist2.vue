<template>
     <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label=" 食品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="下单时间">
              <span>{{ props.row.server_utc }}</span>
            </el-form-item>
            <el-form-item label="评价">
              <span>{{ props.row.rating}}</span>
            </el-form-item>
            <el-form-item label="月售">
              <span>{{ props.row.rating_count}}</span>
            </el-form-item>
            <el-form-item label="差评">
              <span>{{ props.row.is_featured}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
</template>

<style>
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

<script>

</script>