/** 使用setTimeout构建setInterval */
function setIntervalFn(fn, delay) {
  let timer = null;
  const interval = () => {
    fn();
    timer = setTimeout(interval, delay);
  };
  setTimeout(interval, delay);
  return {
    cancel: () => clearTimeout(timer),
  };
}

// 每秒输出,4秒之后停止
const { cancel } = setIntervalFn(() => console.log("1111"), 1000);
setTimeout(() => cancel(), 4000);
