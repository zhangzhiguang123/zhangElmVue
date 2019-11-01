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

//addmins.js
export function getAdminTotal(){
  return axios.get("admin/count");
}

//adminsison.js
export function getAdminIin(){
  return axios.get("admin/all?offset=0&limit=100");
}
//chartAxios.js
export function getUserDistribution(){
  return axios.get("v1/user/city/count")
}
//foodlist.js
export function getFoodlist() {
  return axios.get("shopping/v2/foods?offset=0&limit=50&restaurant_id=2")
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

//orderlist.js
//获取订单列表
export function getOrderList(){
  return axios.get('bos/orders?offset=0&limit=50')
}

//userlist.js

//获取用户列表
export function getUserCounts(){
  return axios.get('v1/users/list?offset=0&limit=1000')
}
//食品分类列表
export function getClassification(){
  return axios.get('v2/index_entry')
}

//删除食品
export function deleteFood(){
  return axios.get('statis/admin/2017-05-30/count')
}
