const maxValue = (nums) => {
  // todo
  let lowest = -Infinity;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > lowest) {
      lowest = nums[i]
    }
  }
      return lowest;
};
​
module.exports = {
  maxValue,
};
​