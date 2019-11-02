<template>
    <topbar :secondNav="nav1" :thirdNav="nav2"></topbar>
</template>
<script>
import topbar from "@/common/components/top-bar";
export default {
    components:{
         topbar
    },
    data(){
        return{
            nav1:"说明",
            nav2:"/说明"
        }
    }
}
</script>
<style lang="less" scoped>

</style>

