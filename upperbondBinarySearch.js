function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");

   let [n, k] = input[0].trim().split(" ").map(Number);
   let arr = input[1].trim().split(" ").map(Number);
   upperBoundLogN(n, k, arr)
  }
  function upperBoundLogN(n, k, arr) {
    let low =0;
    let high = n -1;

    while (low < high) {
      let mid = low + Math.floor((high - low)/2);
      if(arr[mid] <= k){
        low = mid+1
      }else{
        high = mid
      }
 
    }
    if(arr[low] >= k){
      console.log(low)
    }else{
      console.log("-1")
    }
  }
  if (process.env.USERNAME === "User") {
    runProgram(`10 3
    0 2 4 4 5 5 7 7 9 10`);
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