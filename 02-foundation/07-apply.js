const object2 = {
    name: "freemen"
}

function testFunc(a, b) {
    console.log('a :>> ', a);
    console.log('b :>> ', b);
    console.log('this.name :>> ', this.name);
}

// @ts-ignore
Function.prototype.applyFn = function(context, args) {
    if (context == null || context == undefined) context = window
    context.__fn = this
    let res = context.__fn(...args)
    delete context.__fn
    return res
}

// @ts-ignore
testFunc.applyFn(object2, [1,2])