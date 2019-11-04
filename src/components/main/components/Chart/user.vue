
<template>
  <div>
    <div
      style="width: 100%;height: 500px;border:1px solid rgb(180,180,180);background:#fff;"
      id="echartss"
    ></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  //先要导入依赖的实例

  //挂载前初始化echarts实例
  mounted: function() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("echartss"));
    // 绘制图表，this.echarts1_option是数据
    myChart.setOption(this.echarts1_option);
  },

  //在echarts_option中写东西就行了，官方文档直接下这里就可以自己玩了
  data() {
    return {
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
              { value: 335, name: "北京" },
              { value: 310, name: "上海" },
              { value: 234, name: "深圳" },
              { value: 135, name: "杭州" },
              { value: 1548, name: "其他" }
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



