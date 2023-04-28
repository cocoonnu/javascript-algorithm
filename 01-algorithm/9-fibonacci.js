/**
 * @description 斐波那契
 */


function fibonacci(n) {
    if (n == 0) return 0
    if (n == 1) return 1

    // 初始状态
    let n1 = 1 // n - 1 的值
    let n2 = 0 // n - 2 的值

    let res = 0
    for (let i = 2; i <= n; i++) {
        
        res = n2 + n1

        n2 = n1
        n1 = res
    }
    
    return res
}

console.log(fibonacci(10))