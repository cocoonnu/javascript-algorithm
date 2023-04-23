// 发布订阅模式
class EventEmitter {
    constructor() {
        this.events = {};
    }

    // 订阅（同一个事件可绑定多个回调函数）
    on(eventName, callback) {
        // callbacks 回调函数数组 对应 this.events[eventName]

        const callbacks = this.events[eventName] || [];
        callbacks.push(callback);
        this.events[eventName] = callbacks;
    }

    // 发布（触发事件并接收参数 回调函数执行）
    emit(eventName, ...args) {
        const callbacks = this.events[eventName] || [];
        callbacks.forEach((cb) => cb(...args));
    }

    // 取消订阅（将事件名与单个回调函数解绑）
    off(eventName, callback) {
        const index = this.events[eventName].indexOf(callback);
        if (index !== -1) {
            this.events[eventName].splice(index, 1);
        }
    }

    // 只监听一次
    once(eventName, callback) {
        const one = (...args) => {
            callback(...args);
            this.off(eventName, one);
        };
        this.on(eventName, one);
    }
}

let JJ1 = new EventEmitter()
let JJ2 = new EventEmitter()

let handleOne = (params) => {
    console.log(params, 'handleOne')
}

let handleTwo = (params) => {
    console.log(params, 'handleTwo')
}

JJ1.on('aaa', handleOne)
// JJ1.emit('aaa', 'hhhh')
// 取消订阅以后再发就没用了
// JJ1.emit('aaa', 'ffff')

JJ1.on('aaa', handleTwo)
JJ1.emit('aaa', 'ffff')
JJ1.off('aaa', handleOne)
JJ1.emit('aaa', 'ffff')


// JJ2.once('aaa', handleOne)
// JJ2.emit('aaa', 'hhhh')
// // 只能发一次消息，再发就无效了
// JJ2.emit('aaa', 'hhhh')