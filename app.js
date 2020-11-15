const menu = document.getElementById('hamburger');
const overlay = document.querySelector('.overlay');



menu.addEventListener('click', () =>{
  console.log('clicked');
  overlay.style.display = 'block';
});
overlay.addEventListener('click', () =>{
  console.log('clicked');
  overlay.style.display = 'none';
});