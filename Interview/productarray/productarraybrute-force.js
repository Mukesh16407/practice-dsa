function productWithoutSelf(n, arr) {
  let product = new Array(n).fill(0)
  
   for(let i =0; i <n;i++){
    let temp =1;
    for(let j =0; j <n; j++){
      if(i!==j){
        temp = temp*arr[j]
      }
    }
    product[i] = temp
   }
   console.log(product)
}

productWithoutSelf(5,[10,3,5,6,2])