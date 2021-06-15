const humburger= document.querySelector('#header .header .nav-list .humborger');
const mobile_menu = document.querySelector('#header .header .nav-list ul');
const header = document.querySelector('.header .container');

humburger.addEventListener('click' , ()=>{
    humburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
});