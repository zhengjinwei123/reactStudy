import { post } from '../post';

export function postLogin(username,password){
    const param = {
        username: username,
        password: password
    };

    return post("/login",param);
}