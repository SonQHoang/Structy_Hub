
const anagrams = (s1, s2) => {
  const charMap = {};
  
  // Create the CharacterMap
  for(let char of s1) {
    if(!(charMap[char])) {
      charMap[char] = 0;
    }
    charMap[char] += 1;
  }
  // console.log(charMap)
  
  // If the characters in s2 are present, detract 1 from the original count of s1
  for(let char of s2) {
    if(charMap[char]) {
      charMap[char] -= 1;
// If we've found a character that isn't present already, then we have a new / extra character
    } else {
      return false;
    }
  }
  for(let char in charMap) {
    console.log('char', char)
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