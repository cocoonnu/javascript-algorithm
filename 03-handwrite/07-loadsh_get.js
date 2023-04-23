// 实现loadsh._get：https://www.lodashjs.com/docs/lodash.get
function _get(object, path, defaultValue = 'undefined') {

    // 得到属性数组['a', '0', 'b', 'c']
    if (!Array.isArray(path)) {
        path = path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
    }

    // object属性逐步调用 如果是{}[k]则得到undefined
    let res = path.reduce((obj, key) => {
        return (obj || {})[key]
    }, object)

    return res || defaultValue
}

var object = { 'a': [{ 'b': { 'c': 4 } }] }

console.log(_get(object, 'a[0].b.c'))
// => 3

console.log(_get(object, ['a', '0', 'b', 'c']))
// => 3

console.log(_get(object, 'a.b.c', 'default'))
// => 'default'