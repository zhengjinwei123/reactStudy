import { post } from '../post';

export function postAddBlog(title,content){
    return post("/blog/add",{
        title,
        content
    })
}