function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i]) + n;
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let child = node.children[0]

  while (child) {
    node = child
    child = node.children[0]
  }
  return node
}
