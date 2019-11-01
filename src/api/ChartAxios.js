
import axios from "axios"
axios.defaults.baseURL="https://elm.cangdu.org/"


axios.interceptors.response.use(function (response) {

    return response.data;
  }, function (error) {

    return Promise.reject(error);
  });
//获取用户分布
  export function getUserDistribution(){
    return axios.get("v1/user/city/count")
 }
 //获取当前城市
//  export function getUserAddress(){
//   return axios.get("v1/cities?type=guess")
// }

