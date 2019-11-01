<template>
  <div id="box">
    <p>添加食品</p>
    <form action>
      <span>食品名称</span>
      <input type="text" />
      <br />
      <span>食品活动</span>
      <input type="text" />
      <br />
      <span>食品详情</span>
      <input type="text" />
      <br />
      <div class="father">
        <span class="pic">上传食品图片</span>
        <div class="oimg">
          <input type="file" @change="getImg" class="file" />
          <img src="../../images/add.png" alt />
        </div>
        <div class="see">
          <img :src="imgContent" alt />
        </div>
      </div>
      <div id="feature">
        <span>食品特点</span>
        <oselect></oselect>
        <span id="opic" :class="{trans:show}" @click="rotate"></span>
      </div>
      <span style="float:left;margin-top:42px;padding: 0 25px 0 30px;">食品规格</span>
      <div class="size">
        <input
          type="radio"
          name="same"
          id
          style="height:18px;width:18px;position:relative;top:3px;"
          checked
          @click="small"
        />单规格
        <input
          @click="more"
          type="radio"
          name="same"
          id
          style="height:18px;width:18px;position:relative;top:3px"
        />多规格
      </div>
      <div class="show" v-show="isshow">
        <div class="cost">
          <span style="float:left">包装费</span>
          <opack></opack>
          <br />
        </div>
        <div class="cost">
          <span style="float:left;padding:0 20px 0 60px">价格</span>
          <opack></opack>
        </div>
        <div style="overflow:hidden;">
          <el-button type="primary">确认添加食品</el-button>
        </div>
      </div>
      <ovarious v-show="see"></ovarious>
    </form>
  </div>
</template>
<script>
import oselect from "./select.vue";
import opack from "./pack";
import ovarious from "./various";
export default {
  components: {
    oselect,
    opack,
    ovarious
  },
  data() {
    return {
      show: false,
      isshow: true,
      see: false,
      imgContent: ""
    };
  },
  methods: {
    rotate() {
      this.show = !this.show;
    },
    small() {
      this.isshow = true;
      this.see = false;
    },
    more() {
      this.see = true;
      this.isshow = false;
    },
    getImg(event) {
      var input = event.currentTarget;
      var reader = new FileReader();
      reader.readAsDataURL(input.files[0]);
      reader.onload = () => {
        this.imgContent = reader.result;
        window.console.log(this.imgContent);
      };
    }
  }
};
</script>
<style lang="less" scoped>
input:hover {
  border: 1px solid#A9A9A9;
}
#box {
  padding-bottom: 30px;
}
.show {
  overflow: hidden;
}
p {
  width: 604px;
  text-align: center;
  font-size: 20px;
  margin: 0 auto;
  padding: 30px 0 10px 0;
}
form {
  padding-bottom: 30px;
  button {
    background: #20a0ff;
    outline: 0;
    float: left;
    margin-left: 110px;
    margin-top: 30px;
    &:hover {
      background: rgb(95, 178, 241);
    }
  }
  .cost {
    overflow: hidden;
    padding-bottom: 10px;
    span {
      padding: 0 22px 0 44px;
      margin-top: 30px;
    }
  }
  .size {
    margin-top: 20px;
    overflow: hidden;
    position: relative;
    left: -170px;
    padding-bottom: 20px;
    // background: red;
    span {
      float: left;
    }
  }
  #feature {
    width: 604px;
    height: 40px;
    // background: pink;
    overflow: hidden;
    span {
      float: left;
      padding: 0 25px 0 30px;
      margin-top: 12px;
    }

    select {
      width: 205px;
      height: 40px;
      border: 1px solid #bfcbd9;
      outline: 0;
      border-radius: 4px;
      float: left;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance:none option {
        margin-top: 10px;
      }
    }
    span#opic {
      width: 32px;
      height: 32px;
      padding: 0;
      background-image: url("../../images/sanjiao.png");
      position: relative;
      left: -35px;
      top: -7px;
      transition: all 0.5s ease;
      &.trans {
        transform: rotate(180deg);
      }
    }
  }

  .father {
    .see {
      width: 110px;
      height: 110px;
      float: left;
      overflow: hidden;
      position: relative;
      left:-245px;
      top:30px;
      img {
        position: absolute;
        left:0px;
        top:0px;
      }
    }
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
  }
  span.pic {
    position: relative;
    left: -125px;
  }
  .oimg {
    width: 120px;
    border-radius: 4px;
    height: 120px;
    border: 1px dashed #d9d9d9;
    display: inline-block;
    position: relative;
    left: -130px;
    top: 30px;
    // background: pink;
  }
  input.file {
    width: 120px;
    height: 120px;
    border: 1px dashed black;
    margin-top: 0px;
    opacity: 0;
    position: relative;
    z-index: 99;
  }
  img {
    position: relative;
    top: -80px;
  }
  span {
    padding: 0 20px;
  }
  width: 604px;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  border: 1px solid #eaeefb;
  input {
    width: 455px;
    height: 36px;
    margin-top: 20px;
    border: 1px solid #bfcbd9;
    outline: 0;
    border-radius: 4px;
    padding-left: 20px;
  }
}
</style>