/** 防抖，触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间 */
function debounce(fn, wait) {
  let timer;
  return function (...args) {
    let _this = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, wait);
  };
}

/** 节流，高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率 */
function throttle(fn, wait) {
  let timer;
  return function (...args) {
    let _this = this;
    if (!timer) {
      timer = setTimeout(function () {
        timer = null;
        fn.apply(_this, args);
      }, wait);
    }
  };
}
