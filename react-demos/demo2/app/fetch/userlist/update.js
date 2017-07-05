import { post } from '../post';

export function postUpdateUser(username,password){
    return post("/user/update",{
        username,
        password
    })
}