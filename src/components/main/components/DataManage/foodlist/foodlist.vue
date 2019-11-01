<template>
  <div>
    <top :secondNav="nav1" :thirdNav="nav2"></top>
    <div id="app">
      <el-table
        :data="arr.slice((currpage - 1) * pagesize, currpage * pagesize)"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <!-- 嵌套二级 -->
        <foodlist2></foodlist2>
        <el-table-column type="index" widht="100px" label="排序"></el-table-column>
        <el-table-column label></el-table-column>
        <el-table-column property="name" label="介绍"></el-table-column>
        <el-table-column property="rating" label="评价"></el-table-column>
        <!-- 删除和编辑 -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next, sizes, total, jumper"
        :page-sizes="[5, 10, 15, 20]"
        :total="arr.length"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      ></el-pagination>
      <!-- 第一层子组件 -->
      <foodlistTedit ref="s"></foodlistTedit>
    </div>
  </div>
</template>
<script>
import { getFoodlist } from "@/api/foodlist.js";
import foodlistTedit from "./foodlisTedit";
import foodlist2 from "./foodlist2";
import top from "../../../../../common/components/top-bar";

export default {
  data() {
    return {
      arr: [],
      pagesize: 20,
      currpage: 1,
       nav1: "数据管理",
      nav2: "/ 食品列表"
      // isShow:true
    };
  },
  async created() {
    var { data } = await getFoodlist();
    data.forEach(itme => {
      this.arr.push(itme);
    });
  },
  components: {
    foodlist2,
    foodlistTedit,
    top
  },
  methods: {
    handleEdit(index) {
      this.$refs.s.show();
      window.console.log(index);
    },
    handleDelete(index) {
      // 删除
      this.arr.splice(index, 1);

      window.console.log(index);
    },
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
.isi {
  height: 400px;
  width: 400px;
  background: red;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.isi2 {
}
</style>