// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Solution:
var isValid = function (s) {
  let map = { '(': ')', '[': ']', '{': '}' };
  let stack = [];
  for (let ch of s) {
      if (map[ch]) {
          //pushing opening bracket first
          stack.push(map[ch]);
      }
      else if (stack.length > 0 && stack[stack.length - 1] == ch) {
          //if we have a matching closing bracket to the one we pushed earlier, we simply pop it.
          stack.pop();
      }
      else return false;
  }
  //if at last all values are poped i.e stack is empty, we have valid set of parentheses.
  return stack.length == 0;
};

console.log(isValid("(]"))
console.log(isValid("()[]{}"))
console.log(isValid("[[))((]]"))
console.log(isValid("()[]{}"))
