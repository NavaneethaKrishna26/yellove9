const menuIcon=document.querySelector('#menuicon');
const navLinks =document.querySelector('.navlinks');

menuIcon.onclick=()=>{
    navLinks.classList.toggle('active');
}