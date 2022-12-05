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

