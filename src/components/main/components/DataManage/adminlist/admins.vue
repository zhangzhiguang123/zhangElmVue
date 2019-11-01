<template>
    <div>
        <div>
           <ul>
              <!-- <div class="block">
                 <el-table :data="arr">
               <el-table-column property="count" label="总数量"></el-table-column>
             </el-table>
              </div> -->
           </ul>
        </div>

                        
    </div>
     </template>
<script>
import {getAdminTotal} from "@/api/addmins.js";
export default {
    data(){
        return{
             arr:[],
              currentPage:1 
        }  
    },
     methods:{
         current_change(currentPage){  //改变当前页
             this.currentPage = currentPage
         }
     },
       async created(){
        var {data}=await getAdminTotal();
        this.arr.push(data);

    },
}
</script>
<style lang="less" >

</style>