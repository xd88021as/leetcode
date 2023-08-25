/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  let list = new ListNode(0)
  list.next = head
  let curr = list
  while (curr.next !== null && curr.next.next !== null) {
    while (curr.next.next !== null && curr.next.val === curr.next.next.val) {
      curr.next = curr.next.next
    }
    curr = curr.next
  }
  return list.next
}
