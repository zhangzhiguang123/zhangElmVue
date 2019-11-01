<template>
  <div>
    
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
import admins from "./admins";
import adminsison from "./adminsison"

export default {
  data() {
    return {
      obj: []
    };
  },
 components: {
    admins,
    adminsison,
 
  }
}
</script>
