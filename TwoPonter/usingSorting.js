function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let target = Number(input[0]);
  let arr = input[1].trim().split(" ").map(Number);
  returnSumIndex(target, arr);
}
// Function to find a pair in an array with a given sum using sorting
function returnSumIndex(target, arr) {
  // sort the array in ascending order
  let arr1 = arr.sort();

  // maintain two indices pointing to endpoints of the array
  let low = 0;
  let high = arr1.length - 1;

  // reduce the search space arr[low…high]` at each iteration of the loop
  // loop till the search space is exhausted
  while (low < high) {
    // sum found
    if (arr1[low] + arr1[high] === target) {
      console.log("Pair found (" + arr1[low] + "," + arr1[high] + ")");
      return;

      // decrement `high` index if the total is more than the desired sum
    } else if (arr1[low] + arr1[high] > target) {
      high--;
      // increment `low` index if the total is less than the desired sum;
    } else {
      low++;
    }
  }
  // we reach here if the pair is not found
  console.log("Pair not found");
}
if (process.env.USERNAME === "User") {
  runProgram(`10
    8 7 5 6 3 1`);
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
    process.exit(0);
  });
}


//The time complexity of the above solution is O(n.log(n)) and doesn’t require any extra space.