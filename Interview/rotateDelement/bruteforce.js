
function rotateDElement(d,n,arr){
    var temp=new Array(n);
        
    let k = 0;
  d = d%n
    // Storing the n - d elements of
    // array arr[] to the front of temp[]
    for (let i = d; i < n; i++) {
        temp[k] = arr[i];
        k++;
    }
  
    // Storing the first d elements of array arr[]
    //  into temp
    for (let i = 0; i < d; i++) {
        temp[k] = arr[i];
        k++;
    }
   console.log(temp)
    
  }
  rotateDElement(2,6,[1,2,3,4,5,6])