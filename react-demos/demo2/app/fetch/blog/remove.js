import { post } from '../post';

export function postRemBlog(id){
    return post("/blog/remove",{
        id
    })
}