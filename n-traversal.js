function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");
   const testCase =  Number(input[0]);
   let line =1;
   for(let i =0; i < testCase; i++){
       let row = Number(input[line++]);
       let matrix =[]
       for(let j =0; j < row; j++){
         const arr = input[line++].trim().split(" ").map(Number);
         matrix.push(arr)
       }
       nTraversalMatrix(row,matrix)
   }
  }
  function nTraversalMatrix(r,mat) {
      let arr =[]
    for(let i =r-1; i >=0; i--){
       arr.push(mat[i][0])
    }
    for(let j =0; j<n; j++){
     
     }
    console.log(arr)
  }
  if (process.env.USERNAME === "User") {
    runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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