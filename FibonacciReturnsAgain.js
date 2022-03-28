function runProgram(input) {
    // Write code here
   input = Number(input);
  let find = fiboOf(input);
  console.log(find)
  }
  function fiboOf(n) {
      let dp = new Array(n+2);;
      dp[0] =0;
      dp[1] = 1;
      
      for(let i =2; i <=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
      }
     return dp[n]
  }
  if (process.env.USERNAME === "User") {
    runProgram(`5`);
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