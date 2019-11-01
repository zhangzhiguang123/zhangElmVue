import axios from 'axios'

axios.defaults.baseURL = "https://elm.cangdu.org/";

axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });


//获取订单列表
export function getOrderList(){
    return axios.get('bos/orders?offset=0&limit=50')
}

