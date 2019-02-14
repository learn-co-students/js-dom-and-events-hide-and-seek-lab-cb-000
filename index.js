function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const listItems = document.querySelectorAll('.ranked-list li');

  listItems.forEach( function(item) {
    let itemNumber = parseInt(item.textContent);
    item.textContent = itemNumber + n;
  });

  // Alternative
  // for (let i = 0; i < listItems.length; i++) {
  //   let itemNumber = parseInt(listItems[i].textContent);
  //   listItems[i].textContent = itemNumber + n;
  // }
}

function findNestedDiv(div) {
  let nextDiv = div.children[0];

  while (nextDiv) {
    div = nextDiv;
    nextDiv = div.children[0];
  }

  return div;
}

function deepestChild() {
  let nodeToSearch = document.getElementById('grand-node');

  return findNestedDiv(nodeToSearch);
}
