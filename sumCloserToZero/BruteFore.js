function minAbsSumPair(N,arr) {
   
    
   for(let i =0; i < N -2; i++){
    for(let j = i+1; j < N -1; j++){
        for(let k = j +1;j < N; j++){
           if(arr[i] + arr[j] + arr[k] === 13){
              
            return true;
           } 
        }
    }
}
return false
    
}
console.log(minAbsSumPair(6,[1,2,6,9,-5,-2]));




function threeSum(N,arr,sum) {
   arr.sort();
   for(let i =0; i < N -2; i++){
    let left = i +1;
    let right = N -1;
    
    while (left < right) {
        let temp =arr[i] + arr[left] + arr[right];
        if( temp=== sum){
          console.log("triplate is: " + arr[i]+" " + arr[left] + " " + arr[right]);
          return true;
        }else if(temp > sum){
            right--
        }else{
           left++
        }
    }
   }
   return false
}

let find =threeSum(6,[1,2,6,9,-5,-2], 13);
console.log(find)