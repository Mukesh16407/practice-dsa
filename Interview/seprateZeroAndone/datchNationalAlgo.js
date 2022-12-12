let swap = (arr, first, second) => {
    [arr[first], arr[second]] = [arr[second], arr[first]];
  }
  
  function segregate0and1(arr, n) {
    let low = 0;
    let mid = 0;
    let high = n - 1;
  
    while (mid <= high) {
      if (arr[mid] === 0) { 
          swap(arr, low++, mid++);
      } else if (arr[mid] === 2) {
          swap(arr, mid, high--);
      } else if (arr[mid] === 1) {
          mid++;
      }
    }
    console.log(arr)
  }
  
  let arr = [0, 0, 2, 1, 1, 0, 2, 1, 0];
  let n = arr.length;
  
  segregate0and1(arr, n);