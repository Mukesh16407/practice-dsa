arr =[-7,1,5,2,-4,3,0]

function equlibriumIndex(arr) {
   
 
  for(let i =0; i <arr.length; i++){
   let leftSum =0;
   for(let j =0; j <i; j++){
    leftSum = leftSum+ arr[j]
   }
   let rightSum =0;
   for(let k =i+1; k <arr.length;k++){
    rightSum = rightSum+ arr[k]
   }
   if(leftSum === rightSum && i !==0  && i!==arr.length-1){
    return i
   }
   
  }
  return -1
}
console.log(equlibriumIndex(arr))