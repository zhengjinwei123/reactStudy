export default {
    getItem:function(key){
        let value=null;
        try{
            value = localStorage.getItem(key);
        }catch(ex){
            if(__DEV__){
                console.error('localStorage.getItem error',ex.message)
            }
        }finally {
            return value;
        }
    },
    setItem:function(key,value){
        try {
            localStorage.setItem(key, value);
        }catch(e){
            if(__DEV__){
                console.error("localStorage.setItem error",e.message);
            }
        }
    }
}