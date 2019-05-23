function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}
function increaseRankBy(n) {
  let nodes = document.querySelectorAll('.ranked-list li');
  for(let i=0; i<nodes.length; i++) {
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n;
  }
}
function deepestChild() {
  let node = document.querySelector('div#grand-node');
  while (node.children[0]) {
    node = node.children[0];
  }
  return node;
}
