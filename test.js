function promise_all(plist) {
    if (Array.isArray(plist)) throw Error('请传入一个数组')

    return new Promise(function(resolve, reject) {
        for (let index = 0; index < plist.length; index++) {
            const p = plist[index]
            Promise.resolve(p).then(resolve, reject)
        }
    })
}