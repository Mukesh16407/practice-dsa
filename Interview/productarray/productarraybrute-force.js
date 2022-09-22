function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");
   let testCase = Number(input[0]);
   let line =1;
   for(var i =0; i < testCase; i++){
     let size = Number(input[line++]);
     let arr = input[line++].trim().split(" ").map(Number);
     productWithoutSelf(size, arr)
   }
  }
  function productWithoutSelf(n, arr) {
    let product = new Array(n).fill(0)
    
     console.log(product)
  }
  if (process.env.USERNAME === "User") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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