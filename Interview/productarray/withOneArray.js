function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");
   let testCase = Number(input[0]);
   let line =1;
   for(var i =0; i < testCase; i++){
     let size = Number(input[line++]);
     let arr = input[line++].trim().split(" ").map(Number);
     productWithoutSelf(size, arr)
   }
  }
  function productWithoutSelf(n, arr) {
   let temp =1;
   let product = new Array(n)
   for(let i =0; i <n; i++){
    product[i] = temp;
    temp = temp*arr[i]
   }
   temp =1
   for(let j =n -1; j >=0; j--){
    product[j] =product[j]* temp;
    temp = temp*arr[j]
   }
   console.log(product)
  
  
  }
  if (process.env.USERNAME === "User") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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