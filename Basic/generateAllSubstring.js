function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var size = Number(input[0]);
    var str = input[1].trim();
    //console.log(str)
    GenerateAllSubSequence(size, str);
   
   
  }
  function GenerateAllSubSequence(n,str,index = -1,curr = "") {
    if (index == n)
    return;
  
  if (curr.length>0) {
    console.log(curr)
  }
  
  for (let i = index + 1; i < n; i++) {
  
    curr += str[i];
    GenerateAllSubSequence(n,str, i, curr);
  
    // backtracking
    curr = curr.slice(0, - 1);
  }
  return;
  }
  
  if (process.env.USERNAME === "User") {
    runProgram(`4
    abcd`);
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