<template>
  <div id="boxo">
    <el-button type="primary" @click="pop">添加规格</el-button>
    <opop v-show="show" @func="getMsgFormSon" ref="son"></opop>
    <otable ref="son2"></otable>
    <el-button type="primary">确认添加食品</el-button>
  </div>
</template>
<style lang="less" scoped>
#boxo {
  margin-top: 20px;
}
button {
  background: #20a0ff;
  &:hover {
    background: rgb(95, 178, 241);
  }
}
</style>
<script>
import otable from "./addtab";
import opop from "./popup";
export default {
  components: {
    otable,
    opop
  },
  data() {
    return {
      show: false,
      msgFormSon:[],
          };
  },
  methods: {
    pop() {
      this.$refs.son.none();
    },
    getMsgFormSon(data) {
      this.msgFormSon = data;
      window.console.log(this.msgFormSon);
      this.$refs.son2.addOneRow(this.msgFormSon);
    }
  }
};
</script>
