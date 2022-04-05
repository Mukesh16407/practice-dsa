function runProgram(input) {
    // Write code here
   input = input.trim().split("");
   findLongestSubStringPelendrom(input)
  }
  function findLongestSubStringPelendrom(str) {
    let n = str.length; 
    
    let maxLength = 1;
    let start=0;
    for (let i = 0; i < n; i++){
        var low = i - 1;
        var high = i + 1;
        while ( high < n && str[high] == str[i]){
            high++;
        }  
        while ( low >= 0 && str[low] == str[i]){
            low--; 
        }
        while (low >= 0 && high < n && str[low] == str[high]){
            low--;
            high++;
        }
              
        let length = high - low - 1;
        if (maxLength < length) {
            maxLength = length;
            start=low+1;
        }                             
    }
    if(n > 2){
        console.log(maxLength)
    }else{
        console.log(n)
    }
   
}
  if (process.env.USERNAME === "User") {
    runProgram(`thisracecarisgood`);
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