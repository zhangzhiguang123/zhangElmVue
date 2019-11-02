<template>
  <div class="box">
    <el-row>
      <el-col :span="4" ref="theLeft">
        <div class="grid-content bg-purple-dark">
          <div class="boxleft">
            <ul>
              <router-link to="/home" tag="li">
                <i class="iconfont icon-fen_lei"></i>首页
              </router-link>
              <li data-id="0" @click="showThis0">
                <span>
                  <i class="iconfont icon-wenjian"></i>数据管理
                  <img src="../../assets/images/arrows.png" :class="{ 'trans': showFlag0}" alt />
                </span>
              </li>
              <!-- 0start -->
              <ol :class="{ 'show': showFlag0}">
                <router-link to="/userlist" tag="li">用户列表</router-link>
                <router-link to="/businesslist" tag="li">商家列表</router-link>
                <router-link to="/foodlist" tag="li">食品列表</router-link>
                <router-link to="/orderlist" tag="li">订单列表</router-link>
                <router-link to="/adminlist" tag="li">管理员列表</router-link>
              </ol>
              <!-- 0end -->
              <li data-id="1" @click="showThis1">
                <span>
                  <i class="iconfont icon-icon-add"></i>添加数据
                  <img src="../../assets/images/arrows.png" :class="{ 'trans': showFlag1}" alt />
                </span>
              </li>
              <!-- 1start -->
              <ol :class="{ 'show': showFlag1}">
                <router-link to="/addshop" tag="li">添加商铺</router-link>
                <router-link to="/addgoods" tag="li">添加商品</router-link>
              </ol>
              <!-- 1end -->
              <li data-id="2" @click="showThis2">
                <span>
                  <i class="iconfont icon-xingzhuang60kaobei2"></i>图表
                  <img src="../../assets/images/arrows.png" :class="{ 'trans': showFlag2}" alt />
                </span>
              </li>
              <!-- 2start -->
              <ol :class="{ 'show': showFlag2}">
                <router-link to="/userdistribution" tag="li">用户分布</router-link>
              </ol>
              <!-- 2end -->
              <li data-id="3" @click="showThis3">
                <span>
                  <i class="iconfont icon-bianji"></i>编辑
                  <img src="../../assets/images/arrows.png" :class="{ 'trans': showFlag3}" alt />
                </span>
              </li>
              <!-- 3start -->
              <ol :class="{ 'show': showFlag3}">
                <router-link to="/txtedit" tag="li">文本编辑</router-link>
              </ol>
              <!-- 3end -->
              <li data-id="4" @click="showThis4">
                <span>
                  <i class="iconfont icon-shezhi"></i>设置
                  <img src="../../assets/images/arrows.png" :class="{ 'trans': showFlag4}" alt />
                </span>
              </li>
              <!-- 4start -->
              <ol :class="{ 'show': showFlag4}">
                <router-link to="/setup" tag="li">管理员设置</router-link>
              </ol>
              <!-- 4end -->
              <li data-id="5" @click="showThis5">
                <span>
                  <i class="iconfont icon-shuomingcopy"></i>说明
                  <img src="../../assets/images/arrows.png" :class="{ 'trans': showFlag5}" alt />
                </span>
              </li>
              <!-- 5start -->
              <ol :class="{ 'show': showFlag5}">
                <router-link to="/explain" tag="li">说明</router-link>
              </ol>
              <!-- 5end -->
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="20" ref="theRight">
        <div class="grid-content bg-purple-dark">
          <div class="boxright" ref="boxright">
            <router-view></router-view>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import "../../common/font/fonts.css";
export default {
  data() {
    return {
      showFlag0: false,
      showFlag1: false,
      showFlag2: false,
      showFlag3: false,
      showFlag4: false,
      showFlag5: false
    };
  },
  methods: {
    showThis0() {
      this.showFlag0 = !this.showFlag0;
    },
    showThis1() {
      this.showFlag1 = !this.showFlag1;
    },
    showThis2() {
      this.showFlag2 = !this.showFlag2;
    },
    showThis3() {
      this.showFlag3 = !this.showFlag3;
    },
    showThis4() {
      this.showFlag4 = !this.showFlag4;
    },
    showThis5() {
      this.showFlag5 = !this.showFlag5;
    }
  },
  mounted() {
    this.$refs.boxleft.style.minHeight = document.body.clientHeight + "px";
  }
};
</script>
<style lang="less" scoped>
.box{
  width: 100%;
  height: 100%;
}
.el-row {
  width: 100%;
  height: 100%;
  .el-col {
    height: 100%;
    &:first-child {
      position: fixed;
      left: 0;
      .bg-purple-dark {
        .boxleft {
          background: #324057;
          min-height: 1000px;
          & > ul {
            // padding-top: 20px;
            width: 100%;
            display: flex;
            color: #bfcbd9;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            li {
              width: 100%;
              // height: 56px;
              line-height: 56px;
              font-size: 14px;
              cursor: pointer;
              overflow: hidden;
              &.router-link-active {
                color: #20a0ff;
              }
              &:hover {
                background: #48576a;
              }
              i {
                padding: 0 10px 0 15px;
              }
              img {
                margin-top: 17px;
                margin-right: 15px;
                float: right;
                width: 20px;
                height: 20px;
                transition: all 1s ease;
                &.trans {
                  transform: rotate(180deg);
                }
              }
            }
            ol {
              overflow: hidden;
              max-height: 0px;
              width: 100%;
              transition: all 0.6s ease;
              background: #333;
              &.show {
                max-height: 300px;
              }
              li {
                width: 100%;
                height: 56px;
                line-height: 56px;
                font-size: 14px;
                padding-left: 60px;
                //   display: flex;
                cursor: pointer;
                &.router-link-active {
                  color: #20a0ff;
                }
                &:hover {
                  background: #48576a;
                }
              }
            }
          }
        }
      }
    }
    &:last-child {
      position: absolute;
      right: 0;
      .bg-purple-dark {
        background: #fff;
        height: 100%;
      }
    }
  }
}
</style>