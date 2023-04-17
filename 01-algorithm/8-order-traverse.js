/**
 * @description 遍历二叉树
 * @description 一个二叉搜索树，求其中的第 K 小的节点的值
 */

// 全局数组
let orderArr = []


// 前序遍历
function prevOrderTraverse(node) {
    if (!node) return


    orderArr.push(node.value)
    prevOrderTraverse(node.left)
    prevOrderTraverse(node.right)
}

// 中序遍历
function inOrderTraverse(node) {
    if (!node) return

    inOrderTraverse(node.left)
    orderArr.push(node.value)
    inOrderTraverse(node.right)
}

// 后序遍历
function postOrderTraverse(node) {
    if (!node) return

    postOrderTraverse(node.left)
    postOrderTraverse(node.right)
    orderArr.push(node.value)
}


// 查找第k小的值
function getKthValue(node, k) {
    inOrderTraverse(node)

    return orderArr[k]
}


// 一个二叉搜索树
const bst = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null,
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}


console.log(getKthValue(bst, 3))