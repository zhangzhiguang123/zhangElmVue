import axios from "axios"
// 导出管理员人数
export function getAdminTotal(){
    return axios.get("https://elm.cangdu.org/admin/count");
}