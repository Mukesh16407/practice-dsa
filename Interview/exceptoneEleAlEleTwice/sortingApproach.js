
function exceptOneElementAllTwice(arr) {
 
    let arr1 = arr.sort((a,b)=>{
      return a-b
    })
  
    for(let i =0; i <arr.length; i=i+2){
     if(arr1[i] != arr1[i + 1]){
      return arr1[i]
     }
   }
   return -1
  }
  console.log(exceptOneElementAllTwice([7,3,5,4,5,3,4]))