function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");

   
   let testCase = Number(input[0]);
   let line =1;
   for(var i =0; i < testCase;i++){
       let size = Number(input[line++]);
       let arr = input[line++].trim().split(" ").map(Number);
       let S = new Array(size);
        S.fill(0);
       solveFinancialProblem( size,arr, S)
   }
   
  }
  
  function solveFinancialProblem( n,arr,S) {
    S[0] = 1;
    for (let i = 1; i < n; i++) {
        S[i] = 1; 

        for (let j = i - 1; (j >= 0) && (arr[i] >= arr[j]); j--)
            S[i]++;
    }
   console.log(S.join(" "))
  }
  
  
  if (process.env.USERNAME === "User") {
    runProgram(`1
    6
    100 60 70 65 80 85`);
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