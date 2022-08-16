function runProgram(input) {
    // Write code here
    input = input.trim().split("");
    
   
    minLengthSubstringDistinct(input);
   
  }
  function minLengthSubstringDistinct(arr) {
    let obj ={};
    let left =0;
    let right= 0;
    let n = arr.length;
    let len =0
   while(right < n){
     if(obj[arr[right]] === undefined){
       left = Math.max(obj[arr[right]] = 1);
       obj[arr[right]] = right;
     }
     len = Math.max(len, right-left +1);
     right++;
   }
   console.log(len)
  }
  if (process.env.USERNAME === "User") {
    runProgram(`zoomsessionmooz`);
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