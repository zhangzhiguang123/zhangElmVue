<template>
  <el-main>
    <el-scrollbar>
      <el-row :gutter="20">
        <el-col :span="12" class="echarts-item">
          <el-card>
            <div class="box" style="padding: 10px 30px;">
              <div class="content-title">走势图</div>
              <ve-line
                :data="lineChartData"
                :settings="lineChartSettings"
                :mark-point="lineChartMarkPoint"
              ></ve-line>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-scrollbar>
  </el-main>
</template>
<script>
import Vue from "vue";
import VCharts from "v-charts";
Vue.use(VCharts);
export default {
  name: "Dashboard",
  data() {
    return {
      //折线图
      lineChartData: {
        columns: ["日期", "新注册用户", "新增订单", "新增管理员"],
        rows: [
          {
            新注册用户: 6200,
            日期: "2019-10-22",
            新增订单: 4788.99,
           新增管理员: 270,
          
          },
          {
           新注册用户: 3400,
            日期: "2019-10-23",
            新增订单: 3200.0,
            新增管理员: 500,
            
          },
          {
            新注册用户: 4300,
            日期: "2019-10-24",
          新增订单: 4100.88,
            新增管理员: 367,
            
          },
          {
            新注册用户: 5000,
            日期: "2019-10-25",
            新增订单: 4888.88,
          新增管理员: 400,
           
          },
          {
            新注册用户: 7800,
            日期: "2019-10-26",
           新增订单: 2008.99,
         新增管理员: 300,
            
          },
          {
           新注册用户: 2900,
            日期: "2019-10-27",
           新增订单: 1534,
         新增管理员: 550,
          }
        ]
      }
    };
  },
  created: function() {
    this.lineChartData.rows[0]["新注册用户"]=500;
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.content-title {
  height: 30px;
  font-size: 28px;
  line-height: 30px;
  font-weight: 600;
}
.box,.el-row,.el-card__body,.echarts-item,.el-col,.el-col-12,.el-scrollbar,.el-card,.is-always-shadow{
    width: 800px;   
}
.el-main{
margin-left: 90px;
margin-top: 30px;
}

</style>