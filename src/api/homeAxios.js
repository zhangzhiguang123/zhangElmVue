import axios from "axios";
axios.defaults.baseURL = "https://elm.cangdu.org/";

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error)
})

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

