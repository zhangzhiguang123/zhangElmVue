import axios from "axios"
export function getAdminIin(){
    return axios.get("https://elm.cangdu.org/admin/all?offset=0&limit=100");
}