/** 
 * 两个链表的两数之和
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {
  let addOne = 0
  let sum = new ListNode(0)
  const head = sum // 定义一个头指针
  while (addOne || l1 || l2) {
    let val1 = l1 === null ? 0 : l1.val
    let val2 = l2 === null ? 0 : l2.val
    const val = val1 + val2 + addOne
    addOne = val >= 10 ? 1 : 0
    sum.next = new ListNode(val % 10)
    sum = sum.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return head.next
}
