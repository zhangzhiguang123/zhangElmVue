<template>
  <div class="box">
      <div class="div">
      <span>营业时间</span>
    <el-time-select
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
    style=" margin-right:10px ;"
    ></el-time-select>
    <el-time-select
      placeholder="结束时间"
      v-model="endTime"
      :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }"
    ></el-time-select>
    </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
};
</script>
<style lang="less" scoped>
.box {
  width: 570px;
  height: auto;
  position: absolute;
  left: 20%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 615px;

}
span{
    font-size: 14px;
    margin-right: 10px;
}
.div{
    margin-left: -10%;
}
</style>


