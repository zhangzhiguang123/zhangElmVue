<template>
    <Layout>
        <Content>
            <Card :style="{minHeight:'300px'}">
                <div id="myChart" style="width:1000px;margin-left:20px;"></div>
            </Card>
        </Content>
    </Layout>
</template>

<script>
    export default {
        mounted () {
            // 调用绘制图表的方法
            this.draw();
        },
        methods: {
            draw () {
                // 实例化echarts对象
                let myChartDrawer = this.$echarts.init(document.getElementById('myChart'))
                // 绘制条形图
                var option = {
                    title: {
                        // text: '地区点位、设备核对进度',
                        top: 5,
                        left: 'center'
                    },
                    legend: {
                        data: ['新注册用户', '新增订单',"新增管理员"],
                        top: 30
                    },
                    // X轴
                    xAxis: {
                        data: [
                            '2019-10-22', '2019-10-23', '2019-10-24', '2019-10-25', '2019-10-26'
                        ]
                    },
                    // Y轴
                    yAxis: {},
                    // 数据
                    series: [
                        {
                            name: '新注册用户',
                            type: 'bar',
                            data: [120, 100, 440, 320, 150]
                        },
                        {
                            name: '新增订单',
                            type: 'bar',
                            data: [200, 120, 240, 330, 170]
                        },
                         {
                            name: '新增管理员',
                            type: 'bar',
                            data: [200, 120, 240, 330, 170]
                        },
                    ]
                };
                myChartDrawer.setOption(option);
            }
        }
    }
</script>

<style scoped>
    #myChart {
        width: 100%;
        height: 500px;
        clear: both;
        box-sizing: border-box;
        margin: 30px auto;
    }
    canvas{
        width: 1000px;
    }
    
</style>