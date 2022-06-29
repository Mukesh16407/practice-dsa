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
    if (n == 1) {
     console.log("0")
      return;
  }
   
  // Initialize memory to all arrays
  let left = new Array(n);
  let right = new Array(n);
  let prod = new Array(n);

  let i, j;

  /* Left most element of left array
  is always 1 */
  left[0] = 1;

  /* Right most element of right
  array is always 1 */
  right[n - 1] = 1;

  /* Construct the left array */
  for (i = 1; i < n; i++){
    left[i] = arr[i - 1] * left[i - 1];
  }
      

  /* Construct the right array */
  for (j = n - 2; j >= 0; j--){
    right[j] = arr[j + 1] * right[j + 1];
  }
      

  /* Construct the product array using
  left[] and right[] */
  for (i = 0; i < n; i++){
    prod[i] = left[i] * right[i];
  }
      

  /* print the constructed prod array */
  let product =""
  for (i = 0; i < n; i++){
    product = product + prod[i]+" ";
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