function  maximumSumOfSubArray(n, k, arr) {
     var max =0;
     var sum =0;
     for(var i =0; i < k ; i++){
         sum = sum + arr[i]
         if(sum > max){
             max = sum;
         }
     }
     for(var j =k; j < n; j++){
         sum = sum + arr[j];
         sum = sum - arr[j -k];
         if(max < sum){
             max = sum
         }
         
     }
     return max
 }
  twoSum(4,[2, 7, 11, 15])