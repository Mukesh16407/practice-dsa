function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");
   let target = Number(input[0]);
   let arr = input[1].trim().split(" ").map(Number);
   returnSumIndex(target,arr);
  }
  function returnSumIndex(target, arr) {
    
    for (let i = 0; i < arr.length - 1; i++){
            // start from the i'th element until the last element
            for (let j = i + 1; j < arr.length; j++){
                // if the desired sum is found, print it
                 if (arr[i] + arr[j] == target) {
                console.log("Pair found (" + arr[i] + "," + arr[j] + ")");
                 return;
                }
                
            }
        }
 
        // we reach here if the pair is not found
        console.log("Pair not found");
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