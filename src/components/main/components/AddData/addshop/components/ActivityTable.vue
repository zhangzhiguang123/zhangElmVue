<template>
  <div class="box">
    <div class="div">
      <el-table :data="tableData" style="width: 100%" max-height="150">
        <el-table-column prop="title" label="活动标题" width="150"></el-table-column>
        <el-table-column prop="name" label="活动名称" width="150"></el-table-column>
        <el-table-column prop="details" label="活动详情" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
              style="background:red ;width:50px;
            color:#fff"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="bun">
      <el-button plain @click="open4" style="background:#20a0ff;color:#fff;">立即创建</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    open4() {
      this.$notify.error({
        title: "错误",
        message: "请检查输入是否正确"
      });
    },
    addtable() {
      let obj = {};
      obj.title = "减";
      obj.name = "";
      obj.details = "";
      this.tableData.push(obj);
    }
  },
  data() {
    return {
      tableData: [
        {
          title: "减",
          name: "满减优惠",
          details: "满30减5，满60减8"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 605px;
  height: auto;
  position: absolute;
  left: 10%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1200px;
}
.div {
  width: 605px;
  height: auto;
  position: absolute;
  left: 10%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #dfe6ec;
}
.bun {
  margin-top: 22%;
  margin-left: 50%;
}
</style>

