<template>
      <div>
        <header class="admin_title">管理员</header>
        <div class="admin">
            <ul>
                <li>姓名:</li>
                <li>注册时间:</li>
                <li>管理员权限:</li>
                <li>管理员ID</li>
                <li>更换头像:
                    <div class="avatar-uploader">
                         <div class="imgtext">
                          <img :src="Img" alt="">
                          <input type="file" name="img" imgtype="1" @change="getImg($event)"/>
                         </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Img:"data:image/jpeg;base64,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",
        }
    },
    methods:{
        getImg(event){
            // 通过点击事件 获取事件的节点  节点存在input变量中
             var input=event.currentTarget
             var reader=new FileReader();
             reader.readAsDataURL(input.files[0])
             reader.onload=()=>{
                this.Img=reader.result
             }
        }
        }
    }
</script>
<style lang="less" scoped>
.admin_title{
margin-top: 20px;
font-size: 24px;
color:
#666;
text-align: center;
}
.admin{
    width: 60%;
    background-color: 
    #F9FAFC;
    min-height: 400px;
    margin: 20px auto 0;
    border-radius: 10px;
    li{
        padding: 20px;
        color: #666;
        font-size: 14px;
    }
}
.imgtext{
    border: 1px dashed 
    #d9d9d9;
    margin-top: 10px;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 120px;
    img{
        height: 120px;
        width: 120px;
        position: relative;
       
    }
     input{
             height:120px;
             width: 120px;
             position: absolute;
             left: 1%;
             opacity: 0;
             cursor: pointer;
         }
}
</style>