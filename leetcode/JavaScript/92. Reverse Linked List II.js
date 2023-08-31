/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head
  }
  const dummy = new ListNode(0, head)
  let curr = dummy
  let i = 1
  while (i < left) {
    curr = curr.next
    i++
  }
  let start = curr.next
  let next = start.next
  while (left < right) {
    start.next = next.next
    next.next = curr.next
    curr.next = next
    next = start.next
    left++
  }
  return dummy.next
}
