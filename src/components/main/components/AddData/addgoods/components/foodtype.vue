<template>
  <div class="divInput">
    <div class="input" @click="openValue">
      <input @click="rotate" v-model="value" type="text" ref="inp" placeholder="请选择" />
      <span @click="rotate" :class="{show:isshow}"></span>
    </div>
    <div class="list" v-show="show" id="box" @click="rotate">
      <ul>
        <li
          @click="getvalue(index,item)"
          v-for="(item,index) in tableData"
          :key="item.index"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getfood} from "@/api/axios"
export default {
     async created() {
    this.tableData = await getfood();
    window.console.log(this.tableData);
  },
  name: "javascript",
  data() {
    return {
      tableData: [1,2,3,4,5,6],
      show: false,
      isshow: false,
      value: "",
    };
  },
  methods: {
    openValue() {
      this.show = !this.show;
    },
    getvalue(index, item) {
      this.value = item;
      this.$refs.inp.value=item;
      this.show = false;
    },
    rotate() {
      this.isshow = !this.isshow;
    }
  }
};
</script>
<style lang="less" scoped>

ul li {
  list-style: none;
}
.input {
  border-radius: 4px;
  width: 477px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border: 1px solid #cccccc;
  margin-left: 115px;
  position: relative;
    &:hover {
    border: 1px solid#A9A9A9;
  }
  span {
    position: absolute;
    right: 8px;
    top: 5px;
    width: 32px;
    height: 32px;
    background: url(../../images/sanjiao.png);
    transition: all 0.5s ease;
    &.show {
      transform: rotate(180deg);
    }
  }
}
.input input{
    height: 30px;
  border: none;
  outline: none;
  width: 90%;
  position: relative;
  top:-3px;
  font-size: 16px;
}

.list {
  margin-left: 115px;
  width: 477px;
  height: 300px;
  border: 1px solid #cccccc;
  overflow: hidden;
  padding: 10px 0;
  margin-top: 5px;
  overflow: hidden;
  position: absolute;
  background: white;
  z-index: 99;
  box-shadow: 0 0 2px gray;
  overflow-y: auto;

  ul {
    // height: auto;
    white-space: nowrap;
    overflow: hidden;
  }
}
#box::-webkit-scrollbar {
  width: 0px;
  background-color: white;
}

.list ul li {
  width: 100%;
  height: 36px;
  text-align: left;
  cursor: pointer;
  line-height: 30px;
  padding-left: 10px;
}
#box > ul > li:hover {
  background:#eff2f7;
}
</style>