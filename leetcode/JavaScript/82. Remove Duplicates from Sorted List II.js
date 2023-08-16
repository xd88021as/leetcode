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
    if (curr.next.val === curr.next.next.val) {
      let duplicate = curr.next.val
      while (curr.next !== null && curr.next.val === duplicate) {
        curr.next = curr.next.next
      }
    } else {
      curr = curr.next
    }
  }
  return list.next
}
