import { post } from '../post';

export function postRegister(username,password){
    return post('/user/add',{
        username:username,
        password:password
    });
}