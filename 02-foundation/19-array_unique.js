// 普通类型数组去重
const arr = [1, 2, 3, 3, true, true]

// 方法一：set
const uni_arr1 = [...new Set(arr)]

// 方法二：通过属性判断
function unique_arr(arr) {
    let res = []
    let map = {}

    for (let index = 0; index < arr.length; index++) {
        if (!map.hasOwnProperty(arr[index])) {
            map[arr[index]] = index
            res.push(arr[index])
        }
    }

    return res
}

console.log(unique_arr(arr))


// 通过对象数组属性去重（强制使用reduce）
function unique_arr2(arr) {
    let map = new Map()

    return arr.reduce(function(pre, cur) {
        if (!map.has(cur.id)) {
            map.set(cur.id, true)
            return [...pre, cur]
        } else {
            return pre
        }
    }, [])
}

let arr2 = [{
    id: 1, name: 'JJ1',
}, {
    id: 2, name: 'JJ2',
}, {
    id: 1, name: 'JJ1',
}, {
    id: 4, name: 'JJ4',
}, {
    id: 2, name: 'JJ2',
}]

console.log(unique_arr2(arr2))