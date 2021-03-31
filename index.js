const navopen = document.querySelector('#nav_toggle');
const nav = document.querySelector('nav')
const menu = document.querySelectorAll('.mn');
const groupMenu = document.querySelector('.groupMenu');
const groupList = document.querySelector('.groupList');
 
 navopen.addEventListener('click', function() {
   navopen.classList.toggle('active');
   nav.classList.toggle('show');
 });
 
const handler = () => {
  if( nav.classList.contains('show') === true ){
    nav.classList.remove('show');
    navopen.classList.toggle('active');
   }
 };

 menu.forEach(function (menu) {
  menu.addEventListener('click', handler);
});


groupMenu.addEventListener('mouseenter', function() {
  groupList.classList.toggle('show');
});

groupMenu.addEventListener('mouseleave', function() {
  groupList.classList.toggle('show');
});