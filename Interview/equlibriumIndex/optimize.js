arr =[-7,1,5,2,-4,3,0]

function equlibriumIndex(arr) {
   
 let sum =0;
 let leftSum =0;

 for(let i =0; i <arr.length; i++){
  sum +=arr[i]
 }
 for(let j =0; j <arr.length; j++){
  sum -=arr[j];//(get right sum)

  if(leftSum == sum){
    return j;
  }
  leftSum += arr[j]
 }
 return -1
}
console.log(equlibriumIndex(arr))