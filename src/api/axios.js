import axios from "axios";

axios.defaults.baseURL = "https://elm.cangdu.org/";

axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

//addgoods.js

export function getfood() {
  return axios.get("shopping/v2/foods")
}

export function getFoodList() {
  return axios.get("shopping/getcategory/:restaurant_id")
}


// homeAxios.js
export function getUserCount() {
  return axios.get("statis/user/:date/count")
}

export function getOrderCount() {
  return axios.get("statis/order/:date/count")
}

export function getAdminCount() {
  return axios.get("statis/admin/:date/count")
}

export function getAuserlist() {
  return axios.get("v1/users/count")
}

export function getIndentCount() {
  return axios.get("bos/orders/count")
}

export function getadminlist() {
  return axios.get("admin/count")
}


//businesslistAxios.js
export function getbusinessList(){
  return axios.get("shopping/restaurants?latitude=31.22967&longitude=121.4762&limit=100");
}

