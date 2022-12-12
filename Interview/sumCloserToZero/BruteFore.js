function minAbsSumPair(N,arr) {
   
    let left,right,min_sum,sum,min_left, min_right;

    if(N <2){
       console.log("Invalid Input")
    }
    min_left =0;
    min_right=1;
    min_sum = arr[0] + arr[1];

   for( left =0; left < N -1; left++){
    for( right = left+1; right< N ; right++){
       sum = arr[left] + arr[right];
       if(Math.abs(min_sum) > Math.abs(sum)){
        min_sum = sum;
        min_left = left;
        min_right = right
       }
    }
}
 console.log(arr[min_left] + "to " + arr[min_right])
    
}
minAbsSumPair(6,[1,2,6,9,-5,-2]);




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