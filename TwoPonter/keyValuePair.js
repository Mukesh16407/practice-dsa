function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let target = Number(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let find = returnSumIndex(target, arr);
    console.log(find)
  }
  function returnSumIndex(sum, arr) {
     
    let hashMap = {},
      results = []

        for (let i = 0; i < arr.length; i++){
            if (hashMap[arr[i]]){
                results.push([hashMap[arr[i]], arr[i]])
            }else{
                hashMap[sum - arr[i]] = arr[i];
            }
          }
          return results;
    
  }
  if (process.env.USERNAME === "User") {
    runProgram(`10
    8, 7, 2, 5, 3, 1`);
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