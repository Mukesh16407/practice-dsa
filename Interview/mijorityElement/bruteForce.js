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