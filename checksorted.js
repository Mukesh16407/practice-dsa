
function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");
   let size = Number(input[0]);
   let arr = input[1].trim().split(" ").map(Number);
   checkIfSortRotated(size, arr)
  }
  function checkIfSortRotated(n, arr) {
    let minEle = Infinity;
   
    let minIndex = -1;

    // Find the minimum element
    // and it's index
    for (i = 0; i < n; i++) {
        if (arr[i] < minEle) {
            minEle = arr[i];
            minIndex = i;
        }
    }
    flag1 = 1;

    // Check if all elements before minIndex
    // are in increasing order
    for (i = 1; i < minIndex; i++) {
        if (arr[i] < arr[i - 1]) {
            flag1 = 0;
            break;
        }
    }
    flag2 = 1;

    // Check if all elements after minIndex
    // are in increasing order
    for (i = minIndex + 1; i < n; i++) {
        if (arr[i] < arr[i - 1]) {
            flag2 = 0;
            break;
        }
    }
    // Check if last element of the array
    // is smaller than the element just
    // starting element of the array
    // for arrays like [3,4,6,1,2,5] - not circular array
    if (flag1 && flag2 && (arr[n - 1] < arr[0])){
       console.log("YES")
    }else{
       console.log("NO")
    }
       
  }
  if (process.env.USERNAME === "User") {
    runProgram(`6
    3 4 7 9 1 2`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }