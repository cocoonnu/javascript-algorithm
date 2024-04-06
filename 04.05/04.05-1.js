/** 实现发布订阅模式 */
class EventEmitter {
  constructor() {
    this.cache = {};
  }

  on(name, fn) {
    const task = this.cache[name];
    if (task) {
      this.cache[name].push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }

  off(name, fn) {
    const task = this.cache[name];
    if (task) {
      const index = task.findIndex((item) => item === fn);
      if (index >= 0) this.cache[name].splice(index, 1);
    }
  }

  emit(name, ...args) {
    const task = this.cache.splice();
    if (task) {
      for (const fn of task) {
        fn(...args);
      }
    }
  }

  once(name, fn) {
    function fnOnce(...args) {
      fn(...args);
      this.off(name, fnOnce);
    }
    this.on(name, fnOnce);
  }
}
