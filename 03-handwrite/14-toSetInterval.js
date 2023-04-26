// 使用 setTimeout 实现 setInterval
const timeWorker = {}

function _setInterval(callback, time, ...args) {
    const key = Symbol()

    function execute() {
        timeWorker[key] = setTimeout(function() {
            callback(...args) 
            execute()           
        }, time)
    }

    execute()
    return key
}

function _clearInterval(key) {
    if (key in timeWorker) {
        clearTimeout(timeWorker[key])
        delete timeWorker[key]
    }
}

let timer = _setInterval(function(a,b) {
    console.log(a, b)
}, 1000, 1, 2)

setTimeout(() => {
    _clearInterval(timer)
}, 3000)
