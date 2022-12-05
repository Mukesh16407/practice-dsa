//Brute-force;

function majorityElement(arr) {
   let max_count =0;
   let index =-1;

   for(let i =0; i < arr.length; i++){
    let count =0;
    for(let j =0; j < arr.length; j++){
        if(arr[i] === arr[j]){
            count++
        }
        if(count > max_count){
            max_count = count;
            index =i
        }
    }
   }
   let middle = Math.ceil(arr.length/2);
   if(max_count >= middle){
    console.log(arr[index])
   }else{
    console.log("No")
   }
}

majorityElement([3,3,4,2,4,4,2,4,4]);