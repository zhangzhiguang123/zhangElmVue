import axios from "axios"

//获取用户列表
export function getUserCount(){
    return axios.get('https://elm.cangdu.org/v1/users/list?offset=0&limit=1000')
}