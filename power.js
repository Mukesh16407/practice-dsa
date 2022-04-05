function runProgram(input) {
    // Write code here
   [x, y] = input.trim().split(" ").map(Number);
   let powerfun = power(x, y);
   console.log(powerfun)
  }
  function power(base, exponent) {
    if (exponent == 0)
      return 1;
    else
      return base * power(base, exponent - 1);
  }
  if (process.env.USERNAME === "User") {
    runProgram(`2 4`);
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