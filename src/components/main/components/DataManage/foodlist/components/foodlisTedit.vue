<template>
  <div class="box" v-if="isShow">
    <div class="isi">
      <button :src="IMG" @click="heid" />
      <div class="spdill">
        <h2>修改食品信息</h2>
        <div class="item">
          <label for>食品名称</label>
          <input type="text" />
        </div>
        <div class="item">
          <label for>食品介绍</label>
          <input type="text" />
        </div>
        <div class="item">
          <label for>食品分类</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <div class="items">
          <label for>食品图片</label>
          <input type="file" @change="previewImg($event)" data-id="1" class="input" />
          <img :src="imgContent" alt class="img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getClassification } from "@/api/axios";


export default {
  data() {
    return {
      imgContent: "",
      isShow: false,
      value: "",
      options: [
        
      ]
    };
  },
  async created() {
    this.options = await getClassification();
  },
  methods: {
    show() {
      this.isShow = true;
    },
    heid() {
      this.isShow = false;
    },
    previewImg(events) {
      // window.console.log('aaaa')
      var input = events.currentTarget;
      window.console.log(input.files[0]);
      // 1.new出来一个读取文件的实例对象
      var reader = new FileReader();
      // 2.使用reader实例对象读取文件
      reader.readAsDataURL(input.files[0]);
      // 3.读取完毕的监听函数
      reader.onload = () => {
        this.imgContent = reader.result;
        window.console.log(reader.result);
      };
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  height: 100%;
  width: 100%;
  background-color: rgba(87, 84, 84, 0.7);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .isi {
    height: 550px;
    width: 550px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    .sp {
      padding: 15px 0 0 15px;
      font-size: 20px;
      color: #000;
      display: block;
    }
    button {
      position: absolute;
      right: 10px;
      top: 10px;
      height: 25px;
      width: 25px;
    }
    .spdill {
      height: 600px;
      width: 550px;
      font-size: 14px;
      > input {
        width: 100px;
        height: 40px;
        background: cornflowerblue;
        margin: 30px;
      }
    }
  }
}
h2 {
  font-weight: 600;
  font-size: 18px;
  margin: 20px;
}

.item {
  margin: 30px;
  input {
    border: 1px solid #ccc;
    width: 80%;
    height: 30px;
    margin-left: 10px;
    border-radius: 10px;
  }
}
.items {
  margin: 30px;
  .input {
    margin-left: 10px;
    width: 100px;
    height: 100px;
    position: absolute;
    z-index: 100;
    opacity: 0;
    border-radius: 10px;
  }
}
.img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 90px;
  z-index: 1;
}
</style>