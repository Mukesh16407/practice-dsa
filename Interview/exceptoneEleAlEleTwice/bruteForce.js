
function exceptOneElementAllTwice(arr) {
 
    let visited = new Array(arr.length).fill(false)
    for(let i =0; i < arr.length; i++){
      let x = arr[i]
      if(visited[i]==false) {
        let isDuplicate = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (x == arr[j]) {
                isDuplicate = true;
                visited[j] = true;
            }
        }
        if (!isDuplicate)
            return "Element appear only once in array - " + x
    }
      
  
  }
   return -1
  }
  console.log(exceptOneElementAllTwice([7,3,5,4,5,3,4]))