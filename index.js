function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

/* function increaseRankBy(n) {
  const rankedListLis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rankedListLis.length; i++) {
    rankedListLis[i].innerHTML = (parseInt(rankedListLis[i].innerHTML) + n);
  };
} */

/* function increaseRankBy(n) {
  const rankedListLis = document.querySelectorAll('.ranked-list li')
  rankedListLis.forEach(function (li) {
    li.innerHTML = (parseInt(li.innerHTML) + n);
  });
} */

function increaseRankBy(n) {
  const rankedListLis = document.querySelectorAll('.ranked-list li')
  rankedListLis.forEach(li => li.innerHTML = (parseInt(li.innerHTML) + n));
}

function deepestChild() {
  const grandNodeChildren = document
    .getElementById('grand-node')
    .querySelectorAll('div');
  return grandNodeChildren[grandNodeChildren.length - 1];
}