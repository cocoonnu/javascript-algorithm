// 树形结构转成列表 [ {..., children: [] }, {} ]
function treeToList(data) {
    const res = []

    function dfs(tree) {
        tree.forEach(function(item) {
            if (item.children) {
                dfs(item.children)
                delete item.children
            }
            res.push(item)
        })
    }

    dfs(data)
    return res
} 

const data = [
    {
        id: '1',
        name: '父节点1',
        children: [
            {
                id: '1-1',
                name: '子节点1-1',
                children: [
                    {
                        id: '1-1-1',
                        name: '子节点1-1-1'
                    },
                    {
                        id: '1-1-2',
                        name: '子节点1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: '父节点2',
        children: [
            {
                id: '2-1',
                name: '子节点2-1'
            }
        ]
    }
]

const list = treeToList(data)
console.log(list)
// [
//     { id: '1-1-1', name: '子节点1-1-1' },
//     { id: '1-1-2', name: '子节点1-1-2' },
//     { id: '1-1', name: '子节点1-1' },
//     { id: '1', name: '父节点1' },
//     { id: '2-1', name: '子节点2-1' },
//     { id: '2', name: '父节点2' }
// ]