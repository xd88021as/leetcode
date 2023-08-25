/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let left = new ListNode(0)
  let right = new ListNode(0)
  let leftCurr = left
  let rightCurr = right
  while (head !== null) {
    if (head.val < x) {
      leftCurr.next = head
      leftCurr = leftCurr.next
    } else {
      rightCurr.next = head
      rightCurr = rightCurr.next
    }
    head = head.next
  }
  rightCurr.next = null
  leftCurr.next = right.next
  return left.next
}
