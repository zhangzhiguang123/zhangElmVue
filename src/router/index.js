import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/login.vue";
import Main from "../components/main/main.vue";
import Addgoods from "../components/main/components/AddData/addgoods/addgoods.vue";
import Addshop from "../components/main/components/AddData/addshop/addshop.vue";
import Userdistribution from "../components/main/components/Chart/Userdistribution.vue";
import Adminlist from "../components/main/components/DataManage/adminlist/adminlist.vue";
import Businesslist from "../components/main/components/DataManage/businesslist/businesslist.vue";
import Foodlist from "../components/main/components/DataManage/foodlist/foodlist.vue";
import Orderlist from "../components/main/components/DataManage/orderlist/orderlist.vue";
import Userlist from "../components/main/components/DataManage/userlist/userlist.vue";
import Txtedit from "../components/main/components/Edit/Txtedit.vue";
import Explain from "../components/main/components/Explain/explain.vue";
import Home from "../components/main/components/Home/home.vue";
import Setup from "../components/main/components/Setup/setup.vue";
Vue.use(VueRouter);

let routes = [
    {
        path:"/",
        component:Login,
    },
    {
        path:"/main",
        component:Main,
        children:[{
            path:"/addgoods",
            component:Addgoods,
        },
        {
            path:"/addshop",
            component:Addshop,
        },
        {
            path:"/userdistribution",
            component:Userdistribution,
        },
        {
            path:"/adminlist",
            component:Adminlist,
        },
        {
            path:"/businesslist",
            component:Businesslist
        },
        {
            path:"/foodlist",
            component:Foodlist
        },
        {
            path:"/orderlist",
            component:Orderlist
        },
        {
            path:"/userlist",
            component:Userlist
        },
        {
            path:"/txtedit",
            component:Txtedit
        },
        {
            path:"/explain",
            component:Explain
        },
        {
            path:"/home",
            component:Home
        },
        {
            path:"/setup",
            component:Setup
        }
        
    ]
    }
   
];

let router = new VueRouter({routes});

export default router;