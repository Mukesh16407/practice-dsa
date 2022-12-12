function minAbsSumPair(N,arr) {
   
    let sortArray = arr.sort((a,b)=>{
      return a-b
    });
    let left =0;
    let right =N-1;
  let sum;
   let min_left =0;
   let min_right= N-1;
   let min_sum = sortArray[min_left] + sortArray[min_right];
  
   if(N < 2){
    console.log("Invalid")
   }
  
  
   while(left < right){
    sum = sortArray[left] + sortArray[right];
    if(Math.abs(min_sum) > Math.abs(sum)){
      min_sum = sum;
      min_left = left;
      min_right=right
    }
    if(sum < 0){
      left++
    }else{
      right--
    }
   }
   console.log(arr[min_left] +" to "+ arr[min_right])
  }
  minAbsSumPair(6,[1,2,6,9,-5,-2]);