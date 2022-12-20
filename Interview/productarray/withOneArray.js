function productWithoutSelf(n, arr) {
  let temp =1;
  let product = new Array(n)
  for(let i =0; i <n; i++){
   product[i] = temp;
   temp = temp*arr[i]
  }
  temp =1
  for(let j =n -1; j >=0; j--){
   product[j] =product[j]* temp;
   temp = temp*arr[j]
  }
  console.log(product)
 
 
 }

productWithoutSelf(5,[10,3,5,6,2])