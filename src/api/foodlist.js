import axios from "axios"
axios.defaults.baseURL = "https://elm.cangdu.org/";

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export function getFoodlist() {
    return axios.get("shopping/v2/foods?offset=0&limit=50&restaurant_id=2")
}