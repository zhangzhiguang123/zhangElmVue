
<template>
  <div style="width:100%" >
    <div style="width: 100%;height: 500px;background:#fff;" id="echartss"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import { getUserDistribution } from "@/api/ChartAxios.js";
export default {
  //先要导入依赖的实例

  //挂载前初始化echarts实例
  mounted: function() {
  
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById("echartss"));
    // 绘制图表，this.echarts1_option是数据
    this.myChart.setOption(this.echarts1_option);
  },
  async created() {
    var a = await getUserDistribution();

    this.$set(this.echarts1_option.series[0].data[0],"value",a.user_city.beijing)
    this.$set(this.echarts1_option.series[0].data[1],"value",a.user_city.shanghai)
    this.$set(this.echarts1_option.series[0].data[2],"value",a.user_city.shenzhen)
    this.$set(this.echarts1_option.series[0].data[3],"value",a.user_city.hangzhou)
    this.$set(this.echarts1_option.series[0].data[4],"value",a.user_city.qita)
   
    this.myChart.setOption(this.echarts1_option);
  },
  

  data() {
   
    return {
      myChart: null,
      echarts1_option: {
        title: {
          text: "用户分布",
          //   subtext: "纯属虚构",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["北京", "上海", "深圳", "杭州", "其他"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "45%"],
            data: [
              { value: 730, name: "北京" },
              { value: 296, name: "上海" },
              { value: 324, name: "深圳" },
              { value: 175, name: "杭州" },
              { value: 2126, name: "其他" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  }
};
</script>



