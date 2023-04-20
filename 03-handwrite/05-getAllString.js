// 求所有的字符串子串
// 输入：ABCD，
// 返回：ABCD，ABC，BCD，AB，BC，CD，A，B，C，D
const getAllStr = (str) => {
    let result = []
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            // result.push(str.slice(i, j))
            result.push(str.substring(i, j))
        }
    }
    return result;
}

console.log(getAllStr('ABCD'));