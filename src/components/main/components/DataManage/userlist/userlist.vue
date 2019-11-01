<template>
  <div>
    <top :secondNav="nav1" :thirdNav="nav2"></top>
    <userlistOne></userlistOne>
  </div>
</template>

<script>
import userlistOne from "./components/userlistOne";
import top from "../../../../../common/components/top-bar";
export default {
  components: {
    userlistOne,
    top
  },
  data() {
    return {
      nav1: "数据管理",
      nav2: "/ 用户列表"
    };
  }
};
</script>

