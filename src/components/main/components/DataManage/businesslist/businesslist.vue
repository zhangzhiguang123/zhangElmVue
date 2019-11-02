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
          <template slot-scope="scope">
              <el-button plain @click="getshowEditmodalbox(scope.row)">编辑</el-button>
              <el-dialog :visible.sync="showEditmodalbox">
                <!-- from start-->
                <el-form :model="modalData" label-width="80px">
                  <el-form-item label="店铺名称">
                    <el-input v-model="modalData.name"></el-input>
                  </el-form-item>
                  <el-form-item label="详细地址">
                    <el-input v-model="modalData.address"></el-input>
                    <span>当前城市:</span>
                  </el-form-item>
                  <el-form-item label="店铺介绍">
                    <el-input v-model="modalData.description"></el-input>
                  </el-form-item>
                  <el-form-item label="联系电话">
                    <el-input v-model="modalData.phone"></el-input>
                  </el-form-item>
                  <el-form-item label="店铺分类">
                    <div class="block">
                      <el-cascader v-model="value" :options="options"></el-cascader>
                    </div>
                  </el-form-item>
                  <el-form-item label="店铺图片">
                    <el-upload
                      class="avatar-uploader"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
                      :before-upload="beforeAvatarUpload"
                    >
                      <img v-if="imageUrl" :src="modalData.image_path" class="avatar" />
                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                  </el-form-item>
                </el-form>
                <!-- from end -->
                <div slot="footer" class="dialog-footer">
                  <el-button @click="showEditmodalbox = false">取 消</el-button>
                  <el-button type="primary" @click="submitShowEditmodalbox(scope.row)">确 定</el-button>
                </div>
              </el-dialog>
              <router-link to="/addgoods" tag="el-button">添加商品</router-link>
              <el-button plain type="danger" @click="deleteTheRestaurant(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block" style="height:70px;">
        <el-pagination
          @size-change="handleSizeChangesize"
          @current-change="handleCurrentChange"
          :page-sizes="[10,20,30,40]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next"
          :total="page.totalRecords"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Topbar from "../../../../../common/components/top-bar.vue";
import { getbusinessList,goUpdateTheRestaurant,goDeletTheRestaurant} from "@/api/axios";
// import Editmodalbox from "./components/Editmodalbox.vue";
export default {
  data() {
    return {
      secondNav: "数据管理",
      thirdNav: "/商家列表",
      showEditmodalbox: false,
      currpage: 1,
      shoplist: [],
      modalData:{
        id:"",
        name:"",
        address:"",
        phone:"",
        description:"",
        image_path:"",
        category:""
      },//弹出框数据
      page: {
        pageSize: 10, //每页条数,  默认10条
        totalRecords: 0, //总条数
        totalPages: 0 //总页数
      },
      imageUrl: "",
      value: [],
      options: [
        //下拉菜单选项
        {
          value: "yiguoliaoli",
          label: "异国料理",
          children: [
            {
              value: "rihanliaoli",
              label: "日韩料理"
            },
            {
              value: "xican",
              label: "西餐"
            },
            {
              value: "pisayicai",
              label: "披萨意菜"
            },
            {
              value: "dongnanyacai",
              label: "东南亚菜"
            }
          ]
        },
        {
          value: "kuaicanbiandang",
          label: "快餐便当",
          children: [
            {
              value: "kuaicanbiandang",
              label: "快餐便当1"
            },
            {
              value: "kuaicanbiandang",
              label: "快餐便当2"
            },
            {
              value: "kuaicanbiandang",
              label: "快餐便当3"
            },
            {
              value: "kuaicanbiandang",
              label: "快餐便当4"
            },
            {
              value: "kuaicanbiandang",
              label: "快餐便当5"
            },
            {
              value: "kuaicanbiandang",
              label: "快餐便当6"
            },
            {
              value: "kuaicanbiandang",
              label: "快餐便当7"
            }
          ]
        }
      ]
    };
  },
  components: {
    Topbar
    // Editmodalbox
  },
  async created() {
    this.shoplist = await getbusinessList();
    this.page.totalRecords = this.shoplist.length;
    // window.console.log(this.shoplist);
  },
  methods: {
    handleSizeChangesize(size) {
      //分页器
      this.page.pageSize = size;
    },
    handleCurrentChange(value) {
      //分页器
      // window.console.log(value);
      this.currpage = value;
    },
    handleAvatarSuccess(res, file) {
      //头像上传
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      //头像上传
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    getshowEditmodalbox(row){  //修改信息框获得相应信息
        window.console.log(row);
        this.showEditmodalbox = true;
        this.modalData.name = row.name;
        this.modalData.address = row.address;
        this.modalData.description = row.description; //介绍
        this.modalData.phone = row.phone;//电话
        this.modalData.image_path = row.image_path;//图片
        this.modalData.category = this.value; //分类
    },
    async submitShowEditmodalbox(row){  //修改
        this.modalData.id = row.id;
        let getInfo = await goUpdateTheRestaurant(this.modalData);
        if(getInfo.status===1){
          this.$message('修改信息成功');
        }else{
          this.$message('修改信息失败，请检查权限及数据完整性！');
        }
    },
    async deleteTheRestaurant(row){
       let getInfo = await goDeletTheRestaurant(row.id);
        window.console.log(getInfo);       
       if(getInfo.status===1){
          this.$message('删除成功');
        }else{
          this.$message('删除失败，请检查权限及数据完整性！');
        }
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
button.el-button {
  width: 60px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  padding: 0;
}
</style>