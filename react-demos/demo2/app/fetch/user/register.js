import { post } from '../post';

export function postRegister(username,password){
    return post('/register',{
        username:username,
        password:password
    });
}