<template>
  <div id="box">
    <el-table :data="tableData4" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date" label="规格" width="140"></el-table-column>
      <el-table-column prop="name" label="包装费" width="140"></el-table-column>
      <el-table-column prop="province" label="价格" width="140"></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style lang="less" scoped>
#box {
  margin: 20px 0;
  position: relative;
  z-index: 1;
}
.cell {
  margin-left: 20px;
}
button {
  background: red;
  color: white;
  padding: 7px;
  &:hover {
    background:#DC143C;
    color: white;
  }
}
</style>
<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    addOneRow(arr){
      let row = {};
      row.date = arr[0],
      row.name = arr[1],
      row.province = arr[2];
      row.city = "操作";
      // window.console.log(this.$props.tabArr);
      this.tableData4.push(row);
    }
  },
  data() {
    return {
      inp1val:"",
      tableData4: [
        {
          date: "默认",
          name: "0",
          province: "0",
          city: "操作"
        },
      ]
    };
  },
};
</script>