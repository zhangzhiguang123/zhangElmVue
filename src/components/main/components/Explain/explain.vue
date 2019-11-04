<template>
<div>
    <topbar :secondNav="nav1" :thirdNav="nav2"></topbar>
    <p>组长：张志光  所做内容：1.商家列表。2.登录页面。3.路由跳转。4.项目搭建。</p>
    <p>组员：刘世琦  所做内容：1.添加商铺。2.用户分布。3.文本编辑。</p>
    <p>组员：茹意 所做内容：1.首页。2.添加商品。3.公共组件topbar。</p>
    <p>组员：钱纪学 所做内容：1.用户列表。2.订单列表。3.食品列表编辑，删除。 </p>
    <p>组员：常奇隆 所做内容：1.食品列表。2.管理员列表。3.管理员设置。</p>
    <p>组员：李经纬 所做内容：1.说明页。</p>
   </div> 
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
p{
    text-align: center;
    font-size: 16px;
    margin-top: 30px;
}
</style>

