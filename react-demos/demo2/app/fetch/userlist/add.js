import { post } from '../post';

export  function postAddUser(username,password){
    return post("/user/add",{
        username,
        password
    });
}