// 打印出 1~10000 以内的对称数

function isSymmetryNum(start, end) {
    if (start > end) return null
 
    const res = []
    for (let i = start; i <= end; i++) {
        let str = String(i)

        if (str.length <= 1) continue
        if (str.split('').reverse().join('') === str) {
            res.push(i)
        }
    }

    return res
}

console.log(isSymmetryNum(1, 1000));
