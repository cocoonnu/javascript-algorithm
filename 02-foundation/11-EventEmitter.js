// 实现一个发布订阅模式 EventBus
class EventEmitter {
    constructor() {
        this.event = {};
    }
    on(name, callback) {
        if (this.event[name]) {
            this.event[name].push(callback);
        } else {
            this.event[name] = [callback];
        }
    }
    off(name, callback) {
        if (!this.event[name]) return;
        if (!callback) this.event[name] = [];
        this.event[name] = this.event[name].filter((item) => {
            item !== callback && item.initialCallback !== callback;
        })
    }
    emit(name, ...callbacks) {
        if (!this.event[name]) return;
        this.event[name].forEach((cb) => cb(...callbacks));
    }
    once(name, callback) {
        const one = (...args) => {
            callback(...args);
            this.off(name, one);
        }
        one.initialCallback = callback;
        this.on(name, one);
    }
}


const e = new EventEmitter();