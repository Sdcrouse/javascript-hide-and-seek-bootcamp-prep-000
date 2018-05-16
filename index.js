/* Note: I have to call httpserver in the terminal, not open index.html. Then, go to the address that it says my server is running at. Also, since I'm running the program in another tab, I have to log out and back in, then learn test and learn submit when I'm done. */

function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
  // Or, I could simplify it to document.querySelector('#nested .target');
  /* Note: if I said document.querySelector('#nested.target'), then that looks for an element with a 'nested' id AND a 'target' className. I need an element with a .target className that's DESCENDED from an element with a #nested id! */
}

function increaseRankBy(n){
  let elements = document.getElementById('app').querySelectorAll('ul.ranked-list');
  
  for(let i = 0; i < elements.length; i++){ //Loop through elements
    for(let p = 0; p < elements[i].children.length; p++){ /* loop through each child of elements */
      
     elements[i].children[p].innerHTML = parseInt(elements[i].children[p].innerHTML) + n; /* Get the innerHTML of each child of the ul.ranked-list element. Then, parse it for its number and increment it by n. */
    }
  } 
  return;
} /* Admittedly, this looks confusing. Next time, I'll do what they did (see the solution for more details.  */

function deepestChild(){
  var deepestNode = document.querySelector('#grand-node');
  /* Note: deepestNode as defined here is an element, not an array. So, deepestNode[0] is invalid. However, deepestNode.children IS an array, so deepestNode.children[0] IS valid! */
  
  while(deepestNode.children[0]){
    deepestNode = deepestNode.children[0];
  } /* I know that #grand-node has one child, and that each of #grand-node's  descendants has one child, except for the last one. So, keep looping through each descendant until I find the last one. */
  
  return deepestNode;
} /* Hmm...I wonder how I can (in the future, for extra credit :) ) make this find the deepest child when there are sibling nodes? I think I'd need to make two counter variables: one for the highest number of descendants in a node, and one for the number of descendants in the current node. I'd also need a variable to set to the (current) deepest node. */