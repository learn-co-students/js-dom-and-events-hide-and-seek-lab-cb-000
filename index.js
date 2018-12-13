


function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target');
}


function deepestChild() {
  const deepNode = document.getElementById('grand-node').querySelectorAll('div');

  const last = deepNode.length - 1;
  return deepNode[last];
}


function increaseRankBy(num) {
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < ranks.length; i++) {
    let rankUp = parseInt(ranks[i].innerHTML, 10);
    ranks[i].innerHTML = (rankUp + num).toString();
  }
}
