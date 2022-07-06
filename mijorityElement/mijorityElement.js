//Brute-force;

function majorityElement(arr) {
    var count_max =0;
    var index = -1;
    for(var i =0; i <arr.length; i++){
        var count =0;

        for(var j =0; j < arr.length; j++){
           if(arr[i]=== arr[j]){
            count++
           }
        }
        //update maxCount if count of
        //current element is greater
        if(count > count_max){
            count_max= count;
            index =i;
        }
    }
    //if maxCount is grater than n/2
    //return the corresponding element;
    if(count_max > arr.length/2){
        console.log(arr[index])
    }else{
        console.log("No")
    }
}

majorityElement([3,3,4,2,4,4,2,4,4]);


//Sorting Approach;

function SortingApproachmajorityElement(arr) {
    
    let arr1 = arr.sort();
    let n = Math.floor(arr1.length/2);
    
    for(let i =0; i < n; i++){
        if(arr1[i] === arr1[i+(n/2)]){
            console.log(arr1[i])
        }
    }
}
SortingApproachmajorityElement([3,3,4,2,4,4,2,4,4]);

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














