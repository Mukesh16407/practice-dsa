//Sorting Approach;

function SortingApproachmajorityElement(arr) {
    let arr1 = arr.sort();
    let n = Math.floor(arr1.length/2);
    
    for(let i =0; i < arr.length; i++){
      if(arr1[i] === arr1[i+n]){
        console.log(arr1[i])
      }
    }
}
SortingApproachmajorityElement([3,3,4,2,4,4,2,4,4]);
