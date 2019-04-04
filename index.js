function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}


function increaseRankBy(n){
  let list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i <list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild(){
  let nestedList = document.querySelector('div#grand-node');
  let depth = nestedList.querySelectorAll('div').length;
  // let output = depth;
  for(let i = 0; i < depth; i++){
    nestedList = nestedList.querySelector('div');
  }
  return nestedList;
}
