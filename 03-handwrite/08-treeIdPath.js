// 树节点查找：查询id为10的节点，输出节点路径如[1, 3, 10]
function treeIdPath(target, data) {
    let result = []

    // 深度优先搜索 会搜索每一条路线
    function dfs(path, tree) {
        if (!tree.length) return 
        
        tree.forEach(item => {
            path.push(item.id)

            if (item.id == target) {
                // 这里必须深拷贝数组
                result = JSON.parse(JSON.stringify(path))
            }

            if (item.id != target) {
                const children = item.children || []
                dfs(path, children)
                path.pop()
            }
        })
    }

    dfs([], data)
    return result
}

const treeData = [{
    id: 1,
    name: 'jj1',
    children: [
        { id: 2, name: 'jj2', children: [{ id: 4, name: 'jj4', }] },
        {
            id: 3,
            name: 'jj3',
            children: [
                { id: 8, name: 'jj8', children: [{ id: 5, name: 'jj5', }] },
                { id: 9, name: 'jj9', children: [] },
                { id: 10, name: 'jj10', children: [] },
            ],
        },
    ],
}];
let path = treeIdPath(9, treeData);
console.log(path);
