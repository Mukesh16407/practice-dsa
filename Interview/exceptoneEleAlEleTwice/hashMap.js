
function exceptOneElementAllTwice(arr) {
    let obj ={}
   
     for(let i =0; i <arr.length; i++){
      if(obj[arr[i]]){
        obj[arr[i]] =obj[arr[i]] +1
       }else{
        obj[arr[i]] =1
      }
    }
    let ans
    for(let key in obj){
     if(obj[key] ==1){
       ans = key
     }
    }
    console.log(ans)
   }
   exceptOneElementAllTwice([7,3,5,4,5,3,4])