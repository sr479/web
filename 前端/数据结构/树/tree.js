/**
 * 广度优先遍历: 取出队列中的第一个元素，进行操作，然后如果有后代元素则将其push到队尾
 */
// 广度优先
function treeForeach(tree, func) {
  let node, list = [...tree]
  while (node = list.shift()) {
    func(node)
    node.children && list.push(...node.children)
  }
}
/**
 * 深度优先遍历的递归实现
 */
// 先序遍历 先操作后追加
function treeForeach1(tree, func) {
  tree.forEach(data => {
    func(data)
    data.children && treeForeach(data.children, func) // 遍历子树
  })
}
// 后序遍历 先追加，后操作
function treeForeach2(tree, func) {
  tree.forEach(data => {
    data.children && treeForeach(data.children, func) // 遍历子树
    func(data)
  })
}
/**
 * 深度优先循环实现：子节点不追加到队列最后，而是加到队列最前面：
 */
function treeForeach3(tree, func) {
  let node, list = [...tree]
  while (node = list.shift()) {
    func(node)
    node.children && list.unshift(...node.children)
  }
}

/**
 *  列表转为树
 */
function listToTree(list) {
  let info = list.reduce((map, node) => (map[node.id] = node, node.children = [], map), {})
  return list.filter(node => {
    info[node.parentId] && info[node.parentId].children.push(node)
    return !node.parentId
  })
}
// 树转列表
//递归实现
function treeToList(tree, result = []) {
  tree.forEach(node => {
    result.push(node)
    node.children && treeToList(node.children, result,)
  })
  return result
}