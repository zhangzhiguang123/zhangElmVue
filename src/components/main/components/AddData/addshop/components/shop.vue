<template>
  <div id="box">
    <div class="box">
      <div class="input">
        <label>
          <span>*</span>店铺名称
        </label>
        <input type="text" class="input1">
        <br>
        <p ref="p1" class="p">请输入店铺名称</p>
      </div>

      <div class="input">
        <label>
          <span>*</span>详细地址
        </label>
        <input type="text" class="input1" placeholder="请输入地址">
        <p>当前城市: 郑州</p>
        <p ref="p1" class="p">请输入详细地址</p>
      </div>

      <div class="input">
        <label>
          <span>*</span>联系电话
        </label>
        <input type="text" class="input1">
        <br>
        <p ref="p1" class="p">请输入联系电话</p>
      </div>

      <div class="input dianpu">
        <label>店铺简介</label>
        <input type="text" class="input1">
        <br>
      </div>

      <div class="input dianpu">
        <label>店铺标语</label>
        <input type="text" class="input1">
        <br>
      </div>

      <div class="input dianpu">
       
        <div class="block">
             <label>店铺分类</label>
          <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </div>
        <br>
      </div>



    </div>
  </div>
</template>
<script>

// import { getUserAddress } from "@/api/ChartAxios.js";
export default {
  //   async created() {
  //   var a = await getUserAddress();
  //   this.address = a.name;
  //   // window.console.log(a.name)
  // },
  data() {
    return {
      address: "",



value: [],
        options: [{
          value: '',
          label: '异国料理',
          children: [

            {value: 'shejiyuanze',
            label: '日韩料理', },

             {value: 'daohang',
            label: '西餐', },

            {value: 'daohang',
            label: '披萨意面', },

            {value: 'daohang',
            label: '东南亚菜', },


            ]}, {
          value: 'zujian',
          label: '快餐便当',
          children: [

            {value: 'basic',
            label: '简餐',},

            {value: 'basic',
            label: '盖浇饭',},

            {value: 'basic',
            label: '米粉面馆',},

            {value: 'basic',
            label: '包子粥店',},

            {value: 'basic',
            label: '香锅砂锅',},

            {value: 'basic',
            label: '麻辣烫',},

            {value: 'basic',
            label: '饺子馄饨',},

            {value: 'basic',
            label: '汉堡',},

            {value: 'basic',
            label: '生煎锅贴',},

            {value: 'basic',
            label: '黄焖鸡米饭',},

            {value: 'basic',
            label: '烧腊饭',},

            {value: 'basic',
            label: '煲仔饭',},

            {value: 'basic',
            label: '咖喱饭',}],


          }, {
          value: 'ziyuan',
          label: '小吃夜宵',
          children: [{
            value: 'axure',
            label: '小龙虾'
          }, {
            value: 'sketch',
            label: '地方小吃'
          }, {
            value: 'jiaohu',
            label: '烧烤'
          }]}

            , {
          value: 'ziyuan',
          label: '果蔬生鲜',
          children: [{
            value: 'axure',
            label: '水果'
          }, {
            value: 'sketch',
            label: '生鲜'
          }, {
            value: 'jiaohu',
            label: '蔬菜'
          }, {
            value: 'sketch',
            label: '海鲜水产'
          },
          ]


        }]


          
        





    };
  },
  methods: {
      handleChange(value) {
       window.console.log(value);
      }
    },
  
};
</script>
<style lang="less" scoped>
.box {
  width: 570px;
  height: auto;
  position: absolute;
  left: 10%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  .p {
    margin-top: 5px;
    margin-left: 14%;
    font-size: 12px;
    color: red;
    display: none;
  }
}
label {
  margin-right: 10px;
  font-size: 14px;

  span {
    color: red;
    margin-right: 5px;
  }
}
input {
  width: 460px;
  height: 36px;
  border-radius: 4px;
  line-height: 30px;
  border: 1px solid #bfcbd9;
  background-color: #fff;
  color: #1f2d3d;
  padding: 3px 10px;
  box-sizing: border-box;
}
input:hover{
  color: #000;
}
.input {
  margin-bottom: 20px;
}
p {
  font-size: 14px;
  margin-left: 14%;
  margin-top: 10px;
}
.dianpu {
  padding-left:2.5%;
}

</style>

