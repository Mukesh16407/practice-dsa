function printRle(str) {
    let n = str.length;

    for(let i =0; i <n; i++){
        let count =1;
        while (i < n -1 && str[i] === str[i +1]) {
            count++;
            i++
        }
        print(str[i]);
        print(count)
    }
}printRle("aaabbxxdddeffff")