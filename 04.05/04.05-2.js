function parse(json) {
  return eval("(" + json + ")");
}

const jsonString = JSON.stringify({ a: "a" });
console.log(parse(jsonString));
