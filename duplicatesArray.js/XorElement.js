function exceptOneElement(arr) {
    
    let temp =2
    for(let i =1; i < arr.length; i++){
      temp = temp ^ arr[i]
   }
   console.log(temp)
}
exceptOneElement([7,3,5,4,3,4])