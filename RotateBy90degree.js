function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    
    let testCase = Number(input[0]);
    let line =1;
    for(var i =0; i < testCase; i++){
       let row = Number(input[line++]);
       let matrix =[]
       for(var j =0; j < row; j++){
         let arr = input[line++].trim().split(" ").map(Number);
          matrix.push(arr)
       }
       RotateBy90DegreeClockWise(row, matrix)
    }
   
  }
  function RotateBy90DegreeClockWise(n, mat) {
    for (let i = 0; i < (n / 2); i++) {
      for (j = i; j < n - i - 1; j++) {
          var temp = mat[i][j];
          mat[i][j] = mat[n - 1 - j][i];
          mat[n - 1 - j][i] = mat[n - 1 - i][n- 1 - j];
          mat[n - 1 - i][n- 1 - j] = mat[j][n - 1 - i];
          mat[j][n - 1 - i] = temp;
      }
  }
 
  for (k = 0; k < n; k++) {
    var new_mat =[]
    for (l = 0; l < n; l++){
      new_mat.push(mat[k][l])
    }
   
    console.log(new_mat.join(" "))
}
  }
  if (process.env.USERNAME === "User") {
    runProgram(`2
    4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
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