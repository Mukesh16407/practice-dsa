function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");
   let testCase = Number(input[0]);
   for(var i =1; i <=testCase; i++){
    var x = Number(input[i])
    let find = isPowerOfTwo(x);
    if(find){
      console.log("Yes")
    }else{
      console.log("No")
    }
    
    
   }
    
  }
  function isPowerOfTwo(n){
    if (n == 1){
     return true
    } else if (n % 2 != 0 || n ==0){
     return false
  }

   return isPowerOfTwo(n / 2);
  }

  if (process.env.USERNAME === "User") {
    runProgram(`3
    1
    2
    100`);
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