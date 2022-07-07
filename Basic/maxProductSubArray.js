
function largestSubArrayProduct(arr,n) {
    let curr_max_prod = arr[0];
    let prev_max_prod =arr[0];
    let prev_min_prod = arr[0];
    let res = arr[0]

    for (let i = 1;i < n;i++) {  
        curr_max_prod = Math.max(prev_max_prod*arr[i],prev_min_prod*ar[i], arr[i]); 
       let curr_min_prod = Math.min(prev_max_prod*arr[i],prev_min_prod*ar[i], arr[i]);

       res = math.max(res,curr_max_prod);
       prev_max_prod =curr_max_prod;
       prev_min_prod =curr_min_prod
    }
    return res
}

largestSubArrayProduct([-1,6,2,0,7,9],6)