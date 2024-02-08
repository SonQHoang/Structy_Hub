const uncompress = (s) => {
  let result = [];
  let numbers = '0123456789' // the #'s that we're checking against
  
  let i = 0; // first pointer to track the numeric component
  let j = 0; // second pointer to track the alpha component
  
  while (j < s.length) { // Keep running this loop until we reach the end of the string
    if(numbers.includes(s[j])) { // as we're running the loop, if the value of s[j] IS a NUMBER
                                // we want to increment j b/c we want j to stop on a LETTER
      j++
    } else { // J has HIT a LETTER
      const num = Number(s.slice(i,j)) // this gives me everything between i and j, not including j
                                      // Using Number() we turn the string into a # that we can use e.g.: 3
      for(let count = 0; count < num; count += 1) { // creating a loop to decide how many times we need to print the next character
        result.push(s[j])
      }
      j += 1;
      i = j;
    }
  }
  return result.join('')
};
​
module.exports = {
  uncompress,
};
​
  return result;