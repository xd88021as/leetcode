/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || !k) {
    return head
  }
  let count = 0
  let ptr = head
  while (ptr) {
    count++
    ptr = ptr.next
  }
  k = k % count
  if (k === 0) {
    return head
  }
  let ptrv = head
  ptr = head
  while (k--) {
    ptr = ptr.next
  }
  while (ptr.next) {
    ptrv = ptrv.next
    ptr = ptr.next
  }
  ptr.next = head
  head = ptrv.next
  ptrv.next = null
  return head
}
