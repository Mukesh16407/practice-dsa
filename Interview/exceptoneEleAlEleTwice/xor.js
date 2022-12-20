
function exceptOneElementAllTwice(arr) {
 
    let temp = arr[0]
     for(let i =1; i <arr.length; i++){
     
       temp = temp^arr[i]
     }
     console.log(temp)
   }
   exceptOneElementAllTwice([7,3,5,4,5,3,4])