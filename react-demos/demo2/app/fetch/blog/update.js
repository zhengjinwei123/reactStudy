import { post } from '../post';

export function postUpdate(id,title,content){
    return post("/blog/update",{
        id,
        title,
        content
    })
}