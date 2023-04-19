const object = {
    name: "freemen"
}

function testFunc(a, b) {
    console.log('a :>> ', a);
    console.log('b :>> ', b);
    console.log('this.name :>> ', this.name);
}

Function.prototype.callFn = function(context, ...args) {
    if (context == undefined || context == null) context = window
    context.__fn = this
    let res = context.__fn(...args)
    delete context.__fn
    return res
}

testFunc.callFn(object, 1, 2)