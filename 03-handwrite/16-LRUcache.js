// 利用map（自带哈希表+有序功能）实现一个LRU
// LRU缓存结构：固定内存且保持最新数据
class LRUCache {
    constructor(length) {
        if (length < 1) throw new Error('长度不能小于1')
        this.length = length
        this.data = new Map()
    }

    set(key,value) {
        let data = this.data
        // 将此键值对移动到最前面
        if (data.has(key)) {
            data.delete(key)
        }
        data.set(key, value)
        if (data.size > this.length) {
            let firstKey = data.keys().next().value
            data.delete(firstKey)
        }
    }

    get(key) {
        let data = this.data
        if (!data.has(key)) return null
        const value = data.get(key)
        // 将此键值对移动到最前面
        data.delete(key)
        data.set(key, value)
        return value
    }
}

const lruCache = new LRUCache(2)
lruCache.set(1, 1) // {1=1}
lruCache.set(2, 2) // {1=1, 2=2}
console.info(lruCache.get(1)) // 1 {2=2, 1=1}
lruCache.set(3, 3) // {1=1, 3=3}
console.info(lruCache.get(2)) // null
lruCache.set(4, 4) // {3=3, 4=4}
console.info(lruCache.get(1)) // null
console.info(lruCache.get(3)) // 3 {4=4, 3=3}
console.info(lruCache.get(4)) // 4 {3=3, 4=4}
