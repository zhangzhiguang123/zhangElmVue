import axios from "axios"

axios.defaults.baseURL = "https://elm.cangdu.org/";

axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export function getAdminIin(){
    return axios.get("admin/all?offset=0&limit=100");
}