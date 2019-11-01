
import axios from "axios";

axios.defaults.baseURL = "https://elm.cangdu.org/";

axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

//获取用户列表
export function getUserCount(){
    return axios.get('v1/users/list?offset=0&limit=1000')
}

