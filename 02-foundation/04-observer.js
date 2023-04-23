// 观察者模式
class Observer {
    constructor(name) {
        this.name = name
    }

    update() {
        console.log(this.name)
    }
}

class Notifier {
    constructor() {
        this.observers = []
    }

    add(observer) {
        this.observers.push(observer)
    }

    remove(observer) {
        this.observers = this.observers.filter(item => item != observer)   
    }

    notify() {
        this.observers.forEach(item => item.update())
    }
}

const ob1 = new Observer('J1')
const ob2 = new Observer('J2')
const notifier = new Notifier()
notifier.add(ob1)
notifier.add(ob2)

notifier.notify()