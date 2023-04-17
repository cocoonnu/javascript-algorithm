/**
 * @description 用链表实现一个队列
 * @description 封装一个队列 class
 */

class Queue {

    constructor() {
        this.head = null // 链表头节点指针
        this.tail = null // 链表尾节点指针
        this.length = 0 // 链表长度
    }

    // 从链表尾部插入队列
    add(n) {
        let newNode = {
            value: n,
            next: null
        }

        // 当链表为空时
        if (this.head == null) {

            this.head = newNode
        } 

        // 正常处理为尾部
        let tailNode = this.tail // 读取链表尾节点
        if (tailNode) tailNode.next = newNode
        this.tail = newNode

        this.length++
    }

    // 从链表头部移出队列
    delete() {
        if (!this.length || !this.head) return null

        let headNode = this.head
        this.head = headNode.next

        this.length--
        return headNode.value
    }

}

let q = new Queue()
q.add(100)
q.add(200)
q.add(300)
console.info(q.length)
console.info(q.delete())
console.info(q.length)
console.info(q.delete())
console.info(q.length)
console.info(q.delete())
console.info(q.length)
