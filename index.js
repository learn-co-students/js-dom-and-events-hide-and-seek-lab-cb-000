function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  const grandNode = document.querySelector('div#grand-node');
  return getChild(grandNode);
}

function getChild(node) {
  if (node.firstElementChild !== null) {
    return getChild(node.firstElementChild);
  } else {
    return node;
  }
}

function increaseRankBy(n) {
  const rls = document.querySelectorAll('.ranked-list li');

  for(let i = 0; i < rls.length; i++) {
    const currentRank = parseInt(rls[i].innerHTML, 10);
    rls[i].innerHTML = `${currentRank + n}`;
  }
}
