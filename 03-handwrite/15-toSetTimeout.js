// 使用 setInterval 实现 setTimeout
function _setTimeout(callback, time, ...args) {
    const timer = setInterval(() => {
        callback.apply(this, args)
        clearInterval(timer)
    }, time)
}

_setTimeout(function() {
    console.log(111);
},1000)
