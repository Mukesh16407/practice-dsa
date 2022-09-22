


function printRepeating(arr) {
    
    for(let i =0; i < arr.length; i++){
       let j = Math.abs(arr[i]);
       if(arr[j] >=0){
        arr[j] = -arr[j]
       }else{
        console.log(j+" ")
       }

}

}
printRepeating([1,2,3,6,3,6,1])