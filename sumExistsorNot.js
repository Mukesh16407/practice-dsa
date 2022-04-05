function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");
   let n = Number(input[0])
   let arr = input[1].trim().split(" ").map(Number);
   let k = Number(input[2])
   let find = isSubsetSum(n,arr,k);
   if(find){
     console.log("yes")
   }else{
     console.log("No")
   }
  }
  
  function isSubsetSum( n,set, sum){
      // Base Cases
      if (sum == 0)
          return true;
      if (n == 0)
          return false;

      if (set[n - 1] > sum)
        return isSubsetSum(n - 1,set, sum);
      
        return isSubsetSum( n - 1,set, sum)
        || isSubsetSum(n - 1,set, sum - set[n - 1]);
      
          
  }
  if (process.env.USERNAME === "User") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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