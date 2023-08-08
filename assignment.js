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
const output1 = cubeNumber(3);
console.log(output1);




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

const output2 = matchFinder("Peter Parker", "pet");
console.log(output2);

 function sortMaker(arr) {
    if( !Array.isArray){
        return "Please provide an array"
    }
    else{
        for( let i = 0; i < arr.length; i++){
            
        
        if( arr[i] < 0 ){
            return "Invalid Input"
        }
        else if(arr[i] > 0 ) {
            if( arr[0] < arr[1]){
                [arr[0], arr[1]] = [arr[1], arr[0]]
                return arr;
            }
            else{
                if( arr[0] = arr[1]){
                    return "equal";
                }
         
             }
          
     }
       
 }
}
}
const output3 = sortMaker([4, 2]);
console.log(output3);

// 4:::
const address = {street: 10,
    
    society: "Earth Perfect" 
}
    function findAddress(obj) {
    if( typeof obj !== "object"){
        return "Please provide a object"
    }
    else{ 
        if( !obj.house || !obj.society){
        return  obj.street + "," + "__" + "," + obj.society;
      }
      else{
        const result = Object.values(obj);
        return result;
      }
    }
 }

const output4 = findAddress(address);
console.log(output4);


// 5:::

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
        return false;
    }
}
}
const output5 = canPay([1, 2, 5],10);
console.log(output5);


