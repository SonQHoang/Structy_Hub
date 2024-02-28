
const anagrams = (s1, s2) => {
  const charMap = {};
  
  for(let char of s1) {
    if(!(charMap[char])) {
      charMap[char] = 0;
    }
    charMap[char] += 1;
  }
  // console.log(charMap)
  for(let char of s2) {
    if(charMap[char]) {
      charMap[char] -= 1;
    } else {
      return false;
    }
  }
  for(let char in charMap) {
    if(charMap[char] !== 0) {
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