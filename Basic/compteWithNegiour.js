function competeWithNeighbour(n, arr){
    //write code here
   count =0;
  for(var i =0; i < n; i++){
    if(i == 0 && arr[i] > arr[i +1]){
      count++
    }else if((i == n -1)&& arr[i] > arr[i -1]){
      count++
    }else if((arr[i] > arr[i-1]) && arr[i] > arr[i +1] ){
      count++
    }
  }
  console.log(count)
}
