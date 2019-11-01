import axios from "axios"
export function getFoodlist(){
    return axios.get("https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=50&restaurant_id=2")
}