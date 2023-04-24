promise_race = function(promiseArr) {

    if (typeof promiseArr[Symbol.iterator] !== 'function') {
        throw (`传入的参数不是一个可迭代对象`)
    }

    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseArr.length; i++) {
            promiseArr[i].then(resolve, reject)
        };
    })
}

var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, 'err');
    // setTimeout(reject, 500, 'err');
});

promise_race([p1, p2, p3]).then(values => {
    console.log(values);
}, reason => {
    console.log(reason)
});

