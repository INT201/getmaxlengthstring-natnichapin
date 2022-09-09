const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
    let sizeMax = 0
    let ans = []
if(arrayOfString!==null && arrayOfString!==undefined ){
        for(let i =0;i<arrayOfString.length;i++){ 
            sizeMax=arrayOfString[i].length>=sizeMax ? arrayOfString[i].length : sizeMax
        }
        for(let j of arrayOfString){
            if(j.length==sizeMax){
                ans.push(j)
        } 
    }
return ans
    }
return undefined
  
}
module.exports = getMaxLengthString
