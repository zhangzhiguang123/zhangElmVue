import axios from "axios";

axios.defaults.baseURL = "https://elm.cangdu.org/";

axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export function getbusinessList(){
    return axios.get("shopping/restaurants?latitude=31.22967&longitude=121.4762&limit=100");
}


