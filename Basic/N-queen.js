function runProgram(input) {
    // Write code here
   input = Number(input);
   let find =solveNQueens(input);
   console.log(find.length)
  }
  function solveNQueens(n) {
    const result = []
    const board = Array(n).fill(0).map(_ => Array(n).fill('.'))
    
    const colsUsed = Array(n).fill(false)
    const diago135Used = Array(n * 2 - 1).fill(false)
    const diago45Used = Array(n * 2 - 1).fill(false)
    
    const put = (i, j) => {
      const indexOfDiago135 = i + n - j - 1
      const indexOfDiago45 = i + j
      // if not available
      if (colsUsed[j] || diago135Used[indexOfDiago135] || diago45Used[indexOfDiago45]) {
        return
      }
      
      // if possible, put Queen in
      board[i][j] = 'Q'
      colsUsed[j] = true
      diago135Used[indexOfDiago135] = true
      diago45Used[indexOfDiago45] = true
        
      // last Queen is put
      if (i === n - 1) {
        result.push(board.map(row => row.join('')))
      } else {
        for (let k = 0; k < n ; k ++) {
          put(i + 1, k)
        }
      }
      
      board[i][j] = '.'
      colsUsed[j] = false
      diago135Used[indexOfDiago135] = false
      diago45Used[indexOfDiago45] = false
   }
  
   for (let k = 0; k < n ; k ++) {
      put(0, k)
   }
  
   return result
};
  if (process.env.USERNAME === "User") {
    runProgram(`4`);
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