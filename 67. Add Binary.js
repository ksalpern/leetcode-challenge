// Given two binary strings a and b, return their sum as a binary string.



// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// Solution:
var addBinary = function (a, b) {
    // Resultant string
    let result = "";
    // Indices for a and b
    let aLength = a.length - 1;
    let bLength = b.length - 1;
    // Carry
    let carry = 0;
    while (aLength >= 0 || bLength >= 0) {
        // Sum of two bits
        let sum = carry;
        if (aLength >= 0) {
            sum += a[aLength--] - '0';
        }
        if (bLength >= 0) {
            sum += b[bLength--] - '0';
        }
        // Add the bit to the result
        result = sum % 2 + result;
        // Modify carry
        carry = parseInt(sum / 2);
    }
    // Final check if carry exists
    if (carry !== 0) {
        result = 1 + result;
    }
    return result;
};

console.log(addBinary("11", "1"))
console.log(addBinary("1010", "1011"))
console.log(addBinary("1101", "1"))
