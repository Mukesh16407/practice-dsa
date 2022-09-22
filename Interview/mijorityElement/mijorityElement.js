



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


//Moore-voting-Algo;

// step1:- return some element as majority element;

//step2 our responsibility to check it is maj/or not;

function findMajorityElement(arr) {
    let maj_index =0;
    let count =1;
    for(let i =1; i <arr.length; i++){
        if(arr[maj_index] == arr[i]){
            count++
        }else{
            count--
        }
        if(count == 0){
            maj_index =i;
            count =1;
        }
    }
    return arr[maj_index]
}
let element = findMajorityElement([3,3,4,2,4,4,2,4,4]);

console.log(element)














