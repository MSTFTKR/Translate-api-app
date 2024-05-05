const axios=require('axios')


const responsed=async (text)=>{
    try {
        const tut=await axios.request({
            method:'post',
            url:'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCtIhE2ZMTtP2rr6JxHtZjD5yLJb59YG1k',
            headers:{'Content-Type':'application/json',
                 key:'AIzaSyCtIhE2ZMTtP2rr6JxHtZjD5yLJb59YG1k'},
            data:{
                q:text,
                target:'tr'
            }
        })
        return tut.data.data.translations[0].translatedText
    } 
    
    
    catch (error) {
        console.log(error)
        
    }

}
module.exports=responsed;