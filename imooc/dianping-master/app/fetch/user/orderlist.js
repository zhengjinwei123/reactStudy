import { get } from '../get';
import { post } from '../post';

export function getOrderListData(username){
    const result = get("/api/orderlist/"+username);
    return result;
}

export function postComment(id,comment,star){
    const result = post("/api/submitComment",{
        id,
        comment,
        star
    });

    return result;
}