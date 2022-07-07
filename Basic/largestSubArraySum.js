//kadanes Algo


function largestSubArraySum(arr,n) {
    let sum = -Infinity;
    let current_sum =0;

    for (let i = 0;i < n;i++) {  
        current_sum = current_sum+ arr[i];

        if(current_sum > sum){
            sum= current_sum
        }
        if(current_sum <0){
            current_sum =0
        }
    }
    return sum
}
largestSubArraySum([-1,6,2,0,7,9],6)