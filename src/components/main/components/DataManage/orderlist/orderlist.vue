<template>
  <div>
    <top :secondNav="nav1" :thirdNav="nav2"></top>
    <orderlistOne></orderlistOne>
  </div>
</template>
<script>
import orderlistOne from "./components/orderlistOne";
import top from "../../../../../common/components/top-bar";

export default {
  data() {
    return {
      nav1: "数据管理",
      nav2: "/ 订单列表"
    };
  },
  components: {
    orderlistOne,
    top
  }
};
</script>
