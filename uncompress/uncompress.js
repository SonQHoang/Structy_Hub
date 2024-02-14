const uncompress = (s) => {
  // todo
  let result = [];
  let i = 0;
  let j = 0;
  let numbers = "0123456789"
  
  while(j < s.length) {
    if(numbers.includes(s[j])) {
      j++;
    } else {
      const num = Number(s.slice(i, j)); // Gives me my number and casts it as a number;
      for(let count = 0; count < num; count++) {
        result.push(s[j])
      }
      j++;
      i = j;
    }
  } 
  return result.join("");
};
​
module.exports = {
  uncompress,
};
​
//  So we need to run through the entire string and uncompress it
// Define 2 pointers (I & J) to track position
// define result array
// Define numbers to check against=
// We'll use J to run through the string til we reach the end
// As we increment J
  // If we hit a number we'll increment til we hit a letter
  