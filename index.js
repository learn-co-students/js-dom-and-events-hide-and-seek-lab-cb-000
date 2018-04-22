// Define a function which accepts a selector and returns the first element that matches
function getFirstSelector(s) {
  return document.querySelector(s);
}

// Define a function that pulls a .target out of #nested
function nestedTarget() {
  return document.querySelector('#nested .target');
}

// Define a function that pulls out the most deeply nested child from div#grand-node
function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}

// Define a function that increases the ranks in all of the .ranked-lists by n.
// hint: use parseInt()
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
