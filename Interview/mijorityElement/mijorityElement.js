



// key value pair

function keyValueMajorityElement(arr) {
   
    let obj ={};
 let max =0;

for(let i =0; i < arr.length; i++){
  if(obj[arr[i]] === undefined){
    obj[arr[i]] = 1;
  }else{
    obj[arr[i]] =  obj[arr[i]] +1
  }
}
//console.log(obj)
var ans;
for(let key in obj){
  if(obj[key] > max){
    max = obj[key];
    ans = key;
  }
}
   
   console.log(ans) 
}


keyValueMajorityElement([3,3,4,2,4,4,2,4,4]);















