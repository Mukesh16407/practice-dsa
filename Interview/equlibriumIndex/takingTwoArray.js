arr =[-7,1,5,2,-4,3,0]

function equlibriumIndex(arr) {
   
 let leftArray = new Array(arr.length).fill(0);
 let rightArray = new Array(arr.length).fill(0);

 leftArray[0] = arr[0];
 rightArray[arr.length -1] = arr[arr.length -1];
 
 
 for(let i=1; i <arr.length; i++){
  leftArray[i] = leftArray[i-1] + arr[i]
 }
 
 for(let j=arr.length-1; j>0; j--){
    if(j <arr.length -2){

        rightArray[j] = rightArray[j+1]+arr[j]
    }else{
        rightArray[j] = arr[j]
    }
 
 }
 for(let i =0; i <arr.length; i++){
  if(leftArray[i] === rightArray[i]){
    return i
  }
 }
 return -1
}
console.log(equlibriumIndex(arr))