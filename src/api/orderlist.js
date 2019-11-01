import axios from 'axios'

//获取订单列表
export function getOrderList(){
    return axios.get('https://elm.cangdu.org/bos/orders?offset=0&limit=50')
}

