//Enter code here
function runProgram(input) {
    // Write code here
   input = input.trim().split('\n');
   let arr1 = input[0].trim().split("").sort().join('');
   let arr2 = input[1].trim().split("").sort().join('');
  
  
      let find =	equalArrays(arr1,arr2);
    if(find){
      console.log("True")
    }else{
      console.log("False")
    }
  }
  function equalArrays(arr1,arr2) {
    
      let str1 = arr1.trim().split("");
      let str2 = arr2.trim().split("");
    if (str1.length != str2.length){
      return false;
    } 
      for (let i=0;i<arr1.length;i++){
          if (str1[i] != str2[i]){
        return false;
      }
      }
          return true;
    
  }
  
  if (process.env.USERNAME === "HP") {
    runProgram(`anagram
    nag a ram`);
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
  