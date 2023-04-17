/**
 * @description 用两个栈实现一个队列
 * @description 封装一个队列 class
 */

class Queue {

    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    add(n) {
        this.stack1.push(n)     
    }

    delete() {
        // 第一步：将 stack1 所有元素移动到 stack2 中
        while (this.stack1.length) this.stack2.push(this.stack1.pop())

        // 第二步：stack2 移出栈顶元素
        let res = this.stack2.pop()

        // 第三步：将 stack2 所有元素还给 stack1
        while (this.stack2.length) this.stack1.push(this.stack2.pop())

        return res ? res : null
    }

    get length() {
        return this.stack1.length
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
