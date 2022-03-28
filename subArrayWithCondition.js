function runProgram(input) {
    // Write code here
   input = input.trim().split("");
   SubArrayWithCondtion(input)
  }
  function SubArrayWithCondtion(str) {
    let result = 0;
    let n = str.length;

    for (let i=0; i<n; i++){
        for (let j=i; j<n; j++){
            if (str[i] == str[j])
            result++;
        }
          
    }
       
 
    console.log(result);
}
 
  if (process.env.USERNAME === "User") {
    runProgram(`abcab`);
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
     
 
 
