function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let target = Number(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    returnSumIndex(target, arr);
  }
  function returnSumIndex(target, arr) {
    
  }
  if (process.env.USERNAME === "User") {
    runProgram(`10
    8 7 5 6 3 1`);
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