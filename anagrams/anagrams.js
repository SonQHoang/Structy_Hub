const anagrams = (s1, s2) => {
  if(s1.length !== s2.length) return false;
  
  const charCount = {};
  
  for (let char of s1) {
    if (!(char in charCount)) {
      charCount[char] = 0;
    }
    charCount[char] += 1;
  }
  // console.log(charCount);
  
  for (let char of s2) {
    if(char in charCount){
        charCount[char] -= 1;
    } else {
      return false; // You've found a char that's not in S1, but IS in s2 so not an anagram
    }
  }
  
  for(let char in charCount) { // in loop of an object iterates THROUGH THE KEYS of that object
    if(charCount[char] !== 0) {
      return false;
    }
  }
  return true;
};
​
module.exports = {
  anagrams,
};
​
// Random Trivia: You cannot compare two objects in JS and expect to see if they're equal in terms of keys and values
​
// Strict equality between two objects checks if they're the same object in memory;\
​
  for(let char in charCount) { // in loop of an object iterates THROUGH THE KEYS of that object