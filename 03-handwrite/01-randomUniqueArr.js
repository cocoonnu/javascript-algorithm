// 产生一个不重复的随机数组

function randomUniqueArr(len, min, max) {
    if (max - min < len) {
        return null
    }

    const hash = []
    while (hash.length <= len) {
        let flag = Math.floor(Math.random() * max)
        if (flag < min) continue

        if (hash.indexOf(flag) === -1) {
            hash.push(flag)
        }
    }

    return hash
}

console.log(randomUniqueArr(20, 10, 31));
