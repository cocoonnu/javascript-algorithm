// Promise.reject：直接得到一个reject的promise
function promise_reject(value) {
    return new Promise(function(resolve, reject) {
        reject(value)
    })
}