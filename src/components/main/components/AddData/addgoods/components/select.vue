<template>
  <div class="divInput">
    <div class="input" @click="openValue">
      <input @click="rotate" v-model="value" type="text" placeholder="请选择" />
      <span @click="rotate" :class="{show:isshow}"></span>
    </div>
    <div class="list" v-show="show" @click="rotate">
      <ul>
        <li
          @click="getvalue(index,item)"
          v-for="(item,index) in tableData"
          :key="item.index"
        >{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "javascript",
  data() {
    return {
      tableData: [
        {
          name: "新品"
        },
        {
          name: "招牌"
        }
      ],
      show: false,
      isshow: false,
      value: ""
    };
  },
  methods: {
    openValue() {
      this.show = !this.show;
    },
    getvalue(index, item) {
      this.value = item.name;
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
  width: 205px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border: 1px solid #cccccc;
  margin-left: 120px;
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
.input input {
  border: none;
  outline: none;
  width: 90%;
  position: relative;
  top: -3px;
  font-size: 16px;
}

.list {
  margin-left: 120px;
  width: 205px;
  height: 92px;
  border: 1px solid #cccccc;
  overflow: hidden;
  padding: 10px 0;
  margin-top: 5px;
  overflow: hidden;
  position: absolute;
  background: white;
  z-index: 99;
  box-shadow: 0 0 2px gray;
}
.list ul li {
  width: 100%;
  height: 36px;
  text-align: left;
  cursor: pointer;
  line-height: 30px;
  padding-left: 10px;
}
.list ul li:hover {
  background-color: #eff2f7;
}
</style>