function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')

}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children
    for (let q = 0, w = children.length; q < w; q++) {
      children[q].innerHTML = parseInt(children[q].innerHTML) + n
    }
  }
}


function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
