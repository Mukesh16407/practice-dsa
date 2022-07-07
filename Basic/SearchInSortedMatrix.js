function searchInSortedMatrix(n,mat,target) {
    let i =0;
    let j=n-1;
  
    while (i <n && j >=0) {
      if(mat[i][j] === target){
        console.log("element Found");
        return
      }
  
      if(mat[i][j] > x){
        j--
      }else{
        i++
      }
    }
    console.log("element Not Found");
    return;
  }
  searchInSortedMatrix(4,[[10,20,30,40],
  [15,25,35,45],
  [27,29,37,48]
  [32,33,39,50]],29)