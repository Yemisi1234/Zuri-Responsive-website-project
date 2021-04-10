let navItem = document.querySelector('.nav-links');
let hamburger = document.querySelector('#toggle');
let close = document.querySelector('.close');

hamburger.addEventListener('click', showNav);
close.addEventListener('click', closeNav);

function showNav(e){
  console.log(e)
  navItem.style.display = 'block';
  navItem.classList.add('nav-mobile');
}
function closeNav(){
  navItem.style.display = 'none';
}