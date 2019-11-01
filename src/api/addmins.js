import axios from "axios"
// 导出管理员人数
axios.defaults.baseURL = "https://elm.cangdu.org/";

axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export function getAdminTotal(){
    return axios.get("admin/count");
}