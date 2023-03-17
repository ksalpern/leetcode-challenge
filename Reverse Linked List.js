// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:
![]('https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg')

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
![]('https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg')

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

//Solution:
var reverseList = function(head) {
      // base case
      if (!head || head.next === null) {
        return head;
    }
    let reversedHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedHead;
};
