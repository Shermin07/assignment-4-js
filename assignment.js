function cubeNumber(number) {
if(typeof number !== "number"  ){
    return "Please provide a number"
}
else{
   if( number < 0){
    return "Please provide a positive number"
   }
   else{
    const result = number*number*number;
    return result;
   }
}


}





function matchFinder(string1, string2) {
    if( typeof string1 !== "string" || typeof string2 !== "string"){
        return "Please provide a string"
    }
    else{
        if( string1.includes(string2)){
            return true;
        }
        else{
            return false;
        }

    }
}



 function sortMaker(arr) {
    if( !Array.isArray){
        return "Please provide an array"
    }
    else{
        for( let i = 0; i <= arr.length; i++){
            
        
        if( arr[0] < 0 || arr[1] <0 ){
            return "Invalid Input"
        }
        else { 
            if( arr[i] >0 && arr[0] < arr[1] ){
                const temp = arr[0];
                [arr[0], arr[1]] = [arr[1], arr[0]];
                return arr;
            }
            else if(arr[0] > arr[1]){
                return arr;
            }
            else{
                if(arr[0] === arr[1] ){
                    return "equal";
                }
            }
           
           }
           
       
 }
}
}




    function findAddress(obj) {
    if( typeof obj !== "object"){
        return "Please provide a object"
    }
    else{ 
        if( !obj.house ){
        return  obj.street + "," + "__" + "," + obj.society;
      }
      else if( !obj.house && !obj.society){
        return obj.street 
      }
      else{
        const result = Object.values(obj);
        return result;
      }
    }
 }






function canPay(changeArray, totalDue) {
if(changeArray.length === 0 ){
    return "Please provide an array as a first input perameter"
}
else{ let sum = 0;
    for( let i = 0; i < changeArray.length; i++){
        sum = sum + changeArray[i];
       
    }
    if( sum >= totalDue){
        return true;
    }
    else{
        if(sum < totalDue){
            return false;
        }
    }
}
}
const output5 = canPay([1, 5, 5],10);
console.log(output5);


