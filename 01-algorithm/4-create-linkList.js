/**
 * @description 根据数组创建单向链表
 * @createLinkList 创建链表
 * @reverseLinkList 反转链表
 */


// 返回链表也是链表头节点
function createLinkList(arr) {
    const length = arr.length

    if (length === 0) throw new Error('arr is empty')

    // 定义一个链表（也是头节点）
    let curNode = {
        value: arr[length - 1]
    }

    if (length === 1) return curNode

    for (let i = length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode
        }
    }

    return curNode
}


// 翻转链表
function reverseLinkList(linkList) {

    // 定义三个指针
    let prevNode = undefined
    let curNode = undefined
    let nextNode = linkList

    // 循环：直到 nextNode 指向空
    while (nextNode) {

        // 判断一：当 curNode 指向链表头节点时
        if (!prevNode && curNode) {
            
            // 删除链表头节点指向
            delete curNode.next
        }

        // 判断二：当三个指针都有指向时
        if (prevNode && curNode) {

            // 反转当前节点指向
            curNode.next = prevNode
        }

        // 三个节点向右移动
        prevNode = curNode
        curNode = nextNode
        nextNode = nextNode.next
    }

    // 结束状态：prevNode、curNode 指向最后两个节点 nextNode 指向空
    // 将最后一个节点反转指向
    curNode.next = prevNode

    // 返回链表头节点
    return curNode
}

const arr = [100, 200, 300, 400, 500]
const linkList = createLinkList(arr)
console.info(linkList)

const revLinkList = reverseLinkList(linkList)
console.log(revLinkList)