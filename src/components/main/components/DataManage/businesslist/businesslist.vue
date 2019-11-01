<template>
  <div>
    <Topbar :secondNav="secondNav" :thirdNav="thirdNav"></Topbar>
    <div id="table">
      <el-table
        :data="shoplist.slice((currpage - 1) * page.pageSize, currpage * page.pageSize)"
        lazy
        style="width:100%"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="center" inline class="demo-table-expand">
              <el-form-item label="店铺名称">
                <span>{{props.row.name}}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{props.row.address}}</span>
              </el-form-item>
              <el-form-item label="店铺介绍">
                <span>{{props.row.description}}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{props.row.id}}</span>
              </el-form-item>
              <el-form-item label="联系电话">
                <span>{{props.row.phone}}</span>
              </el-form-item>
              <el-form-item label="评分">
                <span>{{props.row.rating}}</span>
              </el-form-item>
              <el-form-item label="销售量">
                <span>{{props.row.recent_order_num}}</span>
              </el-form-item>
              <el-form-item label="分类">
                <span>{{props.row.category}}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="店铺名称" width="270px"></el-table-column>
        <el-table-column prop="address" label="店铺地址" width="270px"></el-table-column>
        <el-table-column prop="description" label="店铺介绍" width="270px"></el-table-column>
        <el-table-column label="操作" width="250px">
          <template>
            <el-row>
              <el-button plain>编辑</el-button>
              <router-link to="/addgoods" tag="el-button">添加商品</router-link>
              <el-button plain type="danger">删除</el-button>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
      <div class="block" style="height:70px;">
        <el-pagination
          @size-change="handleSizeChangesize"
          @current-change="handleCurrentChange"
          :page-sizes="[10,20,30,40]"
          :page-size="page.pageSize"
          :pager-count="8"
          layout="total, sizes, prev, pager, next"
          :total="page.totalRecords"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../../../../../common/components/top-bar.vue";
import { getbusinessList } from "@/api/axios";
export default {
  data() {
    return {
      secondNav:"数据管理",
      thirdNav:"/商家列表",
      currpage: 1,
      shoplist: [],
      page: {
        pageSize: 10, //每页条数,  默认10条
        totalRecords: 0, //总条数
        totalPages: 0 //总页数
      }
    };
  },
  components: {
    Topbar
  },
  async created() {
    this.shoplist = await getbusinessList();
    this.page.totalRecords = this.shoplist.length;
    // window.console.log(this.shoplist);
  },
  methods: {
    handleSizeChangesize(size) {
      this.page.pageSize = size;
    },
    handleCurrentChange(value) {
      // window.console.log(value);
      this.currpage = value;
    }
  }
};
</script>

<style lang="less" scoped>
#table {
  width: 100%;
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
button.el-button{
  width: 60px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  padding: 0;
}
</style>