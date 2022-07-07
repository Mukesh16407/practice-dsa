function findSubArray(arr,target) {
    
    let windowSum =0;
    let high =0;
    for(let low =0; low < arr.length; low++){
        while (windowSum < target && high < arr.length) {
            windowSum += arr[high];
            high++;

        }
        if(windowSum === target){
            console.log(low, high -1);
        }
        windowSum -= arr[low];
    }
}