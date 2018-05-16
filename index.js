/* Note: I have to call httpserver in the terminal, not open index.html. Then, go to the address that it says my server is running at. */

function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
  // Or, I could simplify it to document.querySelector('#nested .target');
  /* Note: if I said document.querySelector('#nested.target'), then that looks for an element with a 'nested' id AND a 'target' className. We need an element with a .target className that's DESCENDED from an element with a #nested id! */
}

function increaseRankBy(n){
  let elements = document.getElementById('app').querySelectorAll('ul.ranked-list');
  
  for(let i = 0; i < elements.length; i++){ //Loop through elements
    for(let p = 0; p < elements[i].children.length; p++){ /* loop through each child of elements */
      
     elements[i].children[p].innerHTML = parseInt(elements[i].children[p].innerHTML) + n; /* Get the innerHTML of each child of the ul.ranked-list element. Then, parse it for its number and increment it by n. */
    }
  } 
} /* Admittedly, this looks confusing. Maybe make separate for loops next time and/or make a variable for each ranked-list. */

