// brute-force
//time-ComplexCity= O(n*k)

//fixed-window 

function maxSum(arr, k) {
    let max_sum = 0;
    for(var i=0; i <arr.length-k+1; i++){
        let sum =0;
       for(j =i; j < i+k; j++){
           sum = sum + arr[j]
           if(sum > max_sum){
               max_sum = sum
           }
       }
     }
     console.log(max_sum)
     
 }
     
 
 maxSum([1,4,2,10,2,3,10,20], 4)
 
 // sliding-window-Technique
//time-ComplexCity= O(n+k) =>k is very small => O(n)
 function SlidingMaxSum(arr, k) {
    if(k > arr.length){
        console.log("Invalid");
        return
    }
    let max_sum =0;
    for(i =0; i < k; i++){
        max_sum = max_sum + arr[i];
        window_sum = max_sum
    }
    for(var i =k; i < arr.length; i++){
        window_sum =window_sum-arr[i -k] +arr[i];

        var sum = Math.max(max_sum,window_sum)
    }
    console.log(sum)
}

SlidingMaxSum([1,4,2,10,2,3,10,20], 4)