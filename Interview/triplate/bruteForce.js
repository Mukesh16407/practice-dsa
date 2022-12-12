function threeSum(N,arr,sum) {
   
      for(let i =0; i < N -2; i++){
        
          for(let j = i+1; j <N -1;j++){
              for(let k =j+1; k <N;k++){
                if(arr[i] + arr[j] + arr[k] === sum){
                 console.log(arr[i], arr[j], arr[k]);
                 return true
                }
              }
          }
      }
      
        
      return false
    }
    
    console.log(threeSum(6,[1,2,6,9,-5,-2], 13));
    