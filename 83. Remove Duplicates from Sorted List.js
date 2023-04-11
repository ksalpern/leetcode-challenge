// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.



// Example 1:
// https://assets.leetcode.com/uploads/2021/01/04/list1.jpg

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:
// https://assets.leetcode.com/uploads/2021/01/04/list2.jpg

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]


// Constraints:

// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

// Solution:
var deleteDuplicates = function (head) {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
};

console.log(deleteDuplicates([1,1,2]))
console.log(deleteDuplicates([1,1,2,3,3]))
console.log(deleteDuplicates([1,1,2,2,2,3,3]))
