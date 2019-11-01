<template>
  <div id="obox">
    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="1000" label="描述文字"></el-input-number>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num1: 1
    };
  },
  methods: {
    handleChange(value) {
      window.console.log(value);
    }
  }
};
</script>
<style lang="less" scoped>
#obox {
  width: 180px;
  height: 50px;
  position: relative;
  top: -30px;
  left:115px;
}
input:hover{
      border: 1px solid#A9A9A9;
}
</style>