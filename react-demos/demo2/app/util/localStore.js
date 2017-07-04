export default {
    getItem: function(key){
        let value;
        try{
            value = localStorage.getItem(key);
        }catch(e){
            if(__DEV__){
                console.error('localStorage.getItem error:',e.message);
            }
        }finally {
            return value;
        }
    },
    setItem: function(key,value){
        try{
            localStorage.setItem(key,value);
        }catch(e){
            if(__DEV__){
                console.error('localStorage.setItem error',e,message);
            }
        }
    }
}