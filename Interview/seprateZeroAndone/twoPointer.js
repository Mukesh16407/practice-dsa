function segregate0and1(arr, n){
  
    let left =0;
    let right = n-1;
  
    while(left < right){
  
      while(arr[left] ===0 && left < right){
        left++
      }
      while(arr[right] ===1 && left < right){
        right--
      }
      if(left < right){
        arr[left] =0;
        arr[right] = 1;
        left++;
        right--
      }
    }
    console.log(arr)
  }
  
    let arr = [ 1,1,0, 1, 0, 1,0, 1, 1 ];
    let n = arr.length;
     
  segregate0and1(arr, n);
  