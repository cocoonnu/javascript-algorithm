// @ts-ignore
Function.prototype.bindFn = function(context, ...args1) {
    if (context == null || context == undefined) context = window
    let _this = this

    return function(...args2) {
        context.__fn = _this
        let res = context.__fn(...[...args1, ...args2])
        delete context.__fn
        return res
    }
}

function test(a, b) {
    console.log(this.name);
    console.log([a, b]);
}

const objbind = {
    name: "freemen"
}

// @ts-ignore
const func = test.bindFn(objbind, 1)
func(2)