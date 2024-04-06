/** 实现一个LRU缓存函数 */
class LRU {
  constructor(size) {
    this.size = size;
    this.cache = new Map();
  }

  get(key) {
    const value = this.cache.get(key);
    if (value) {
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    const oriValue = this.cache.get(key);
    if (oriValue) {
      this.cache.delete(key);
      this.cache.set(key, value);
    } else {
      if (this.cache.size > this.size) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }
      this.cache.set(key, value);
    }
  }
}
