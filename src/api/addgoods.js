import axios from "axios";
axios.defaults.baseURL = "https://elm.cangdu.org/";

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error)
})

export function getfood() {
    return axios.get("shopping/v2/foods");
}

export function getFoodList() {
    return axios.get("shopping/getcategory/:restaurant_id");
}
