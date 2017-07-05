import { get } from '../get';

export function getUserList(){
    return get("/user/list");
}