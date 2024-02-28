
const compress = (s) => {
  // todo
  let i = 0;
  let j = 0;
  let result = [];
  
  while(j <= s.length) {
    if(s[i] === s[j]) {
      j+= 1;
    } else {
      const num = j - i;
      if(num === 1) {
        result.push(s[i])
      } else {
        result.push(num, s[i])
      }
      i = j;
    }
  }
  return result.join("");
};
​
module.exports = {
  compress,
};
​
// 2 pointer method again;
// pointer i and pointer j;
// create an array to hold the final compressed string
// if i === j then keep moving j up
// once i and j are different, we want to get the difference of their indexes
// then push the number and s[i] into the result array
// if the number === 1 then just push s[i];
​
//      i
//ccaaatsss_
//         j
// [2c3at]