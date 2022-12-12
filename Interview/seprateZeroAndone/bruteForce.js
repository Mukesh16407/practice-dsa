
function segregate0and1(arr, n){
    let count = 0;
   let arr1 =[];
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0)
            count++;
    }
  
    for (let i = 0; i < count; i++){
  
      arr[i] = 0;
      arr1.push(arr[i])
    }
  
    // Loop fills remaining arr space with 1
    for (let j = count; j < n; j++){
      arr[j] = 1;
      arr1.push(arr[j])
  
    }
    console.log(arr1)
  }
  
    let arr = [ 1,1,0, 1, 0, 1,0, 1, 1 ];
    let n = arr.length;
     
  segregate0and1(arr, n);
     
 

 