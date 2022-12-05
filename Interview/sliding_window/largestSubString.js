function largestSubString(str) {
  
    let hm = new Map();
    let start =0;
    let max_length =0;
  
    for(let i =0; i <str.length; i++){
      if(hm.has(str[i])){
        start = Math.max(start,hm.get(str[i]) +1)
      }
      hm.set(str[i], i);
      max_length = Math.max(max_length,i -start +1)
    }
    console.log(max_length)
  }
  largestSubString("abbcdeagfmnbb")