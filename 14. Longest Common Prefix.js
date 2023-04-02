// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// Solution:
var longestCommonPrefix = function (strs) {
  if (!strs.length) ''

  for (let i = 0; i <= strs[0].length; i++) {
      if (!strs.every(str => str[i] === strs[0][i])){
          return strs[0].slice(0, i)
      }
  }
  return strs[0]
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
