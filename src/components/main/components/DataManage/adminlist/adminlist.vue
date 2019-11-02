<template>
  <div>
    <top :secondNav="nav1" :thirdNav="nav2"></top>
    <div>
      <!-- 管理员信息 -->
      <adminsison></adminsison>
    </div>
    <div>
      <!-- 管理员总数量 -->
      <admins></admins>
    </div>
  </div>
</template>

<script>
import admins from "./components/admins";
import adminsison from "./components/adminsison";
import top from "../../../../../common/components/top-bar";

export default {
  data() {
    return {
      obj: [],
      nav1: "数据管理",
      nav2: "/ 管理员列表"
    };
  },
  components: {
    admins,
    adminsison,
    top
  }
};
</script>
