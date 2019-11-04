<template>
    <div id="box">
    <top :secondNav="nav1" :thirdNav="nav2"></top>       
        <shop></shop>
        <bnt></bnt>
        <tim></tim>
        <upload1></upload1>
        <upload2></upload2>
        <upload3></upload3>
        <preferential></preferential>
        <ActivityTable></ActivityTable>
    </div>
</template>
<script>
import shop from "./components/shop.vue"
import bnt from "./components/bnt.vue"
import tim from "./components/time.vue"
import upload1 from "./components/upload1.vue"
import upload2 from "./components/upload2.vue"
import upload3 from "./components/upload3.vue"
import preferential from "./components/preferential.vue"
import ActivityTable from "./components/ActivityTable.vue"
import top from "../../../../../common/components/top-bar.vue";
export default {
      components: {
        top,
        shop,
        bnt,
        tim,
        upload1,
        upload2,
        upload3,
        preferential,
        ActivityTable
  },
    data() {
    return {
      nav1: "添加数据",
      nav2: "/ 添加商铺"
    };
  },
}
</script>
<style lang="less" scoped>

</style>

