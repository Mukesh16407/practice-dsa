function threeSum(N,arr,sum) {
    arr.sort((a, b)=>{
      return a-b
    });
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
  
  // 
  