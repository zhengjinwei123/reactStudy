import { post } from '../post';

export function postRemUser(username){
    return post("/user/remove",{
        username
    })
}