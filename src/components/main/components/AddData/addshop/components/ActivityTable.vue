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
      <el-button plain @click="open4" style="background:#20a0ff;color:#fff;" >立即创建</el-button>
    </div>
  </div>
</template>
<script>
import  bus from "@/assets/bus.js"
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
      obj.title = this.title;
      obj.name = this.name;
      obj.details = this.getmsg;
      this.tableData.push(obj);
    },
     btn:function(){
      bus.$on("send",(val)=> {
     this.getmsg = val;
      // window.console.log(this.getmsg)
    });
    }
  },
  data() {
    return {
      getmsg: "",
      value:"",
      title:"",
      name:"",

      tableData: [
        {
          title: "减",
          name: "满减优惠",
          details: "满30减5，满60减8"
        }
      ]
    };
  },
  created() {
   this.btn();
   bus.$on("addTable",()=>{
     this.addtable();
    //  window.console.log(67);

   });
  },
  mounted(){
    bus.$on("val",(data)=>{
        this.value=data;
        // window.console.log(this.value)
        if(this.value=="选项1"){
          this.title="减";
          this.name="满减优惠"
        }else if(this.value=="选项2"){
          this.title="特";
          this.name="优惠大酬宾";
        }else if(this.value=="选项3"){
          this.title="新";
          this.name="新用户立减";
        }else if(this.value=="选项4"){
          this.title="领";
          this.name="进店领劵";
        }
    })
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
  margin-top: 25%;
  margin-left: 50%;
}
</style>

