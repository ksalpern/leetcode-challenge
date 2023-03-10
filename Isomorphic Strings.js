// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true


// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// Solution:
let isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false
  // Each string has to have its own dictionary
  let sDict = new Map();
  let tDict = new Map();

  for (let i = 0; i < s.length; i++) {
    let sc = s[i];
    let tc = t[i];
    // If both dictionaries do not have their respective characters mapped yet, 
    // then we should set them
    if (!sDict.has(sc) && !tDict.has(tc)) {
      sDict.set(sc, tc);
      tDict.set(tc, sc);
    }

    // If either char does not match then it is not isomorphic 
    if (sDict.get(sc) !== tc || tDict.get(tc) !== sc) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic('edd', 'paa'))
console.log(isIsomorphic('edsd', 'paa'))
console.log(isIsomorphic('eredd', 'prpaa'))

