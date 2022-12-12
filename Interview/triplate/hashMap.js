function threeSum(N,arr,sum) {
 
    for (let i = 0; i < N - 2; i++) {
      let s = new Set();
      let curr_sum = sum - arr[i];
  
      for (let j = i + 1; j < N; j++){
        if (s.has(curr_sum - arr[j])){
          console.log("Triplet is " +arr[i]+", "+arr[j]+", "+(curr_sum - arr[j]) );
             
            return true;
        }
        s.add(arr[j]);
      }
    }
    return false;
  }
  
  let find =threeSum(6,[1, 4, 45, 6, 10, 8], 22);
  console.log(find)
  
  // 