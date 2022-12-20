function productWithoutSelf(n, arr) {
  let prodArray = new Array(n).fill(0);
  let leftArray = new Array(n).fill(0);
  let rightArray = new Array(n).fill(0)
  
  leftArray[0] = 1;
  rightArray[n-1] = 1
  for(let i =1; i <n; i++){
    leftArray[i]= leftArray[i-1]* arr[i-1];
  }
  for(let j =n-1; j >0; j--){
   
    rightArray[j-1]= rightArray[j]* arr[j];
    console.log(rightArray[j])
  }
  for(let i =0; i < n; i++){
    prodArray[i] = leftArray[i]*rightArray[i]
  }
  console.log(prodArray)
}

productWithoutSelf(5,[10,3,5,6,2])