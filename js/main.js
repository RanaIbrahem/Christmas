/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav_menu');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');
/*=============== MENU SHOW ===============*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menue')
    })
}
/*=============== MENU HIDDEN ===============*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menue')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav_menu');
    //when we click on each nav__link we remove the show menue
    navMenu.classList.remove('show-menue');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    //when the scroll is greater then 50 viewport height , add the scroll-header class
    this.scrollY >=50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
const scrollUp = document.getElementById('scroll-up')
//when the scroll is higher than 350 vieport height, add the show-scroll class to the tag with the scrollip
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
const scrollY = window.pageYOffset

sections.forEach(current =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if (scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    }
    else{
        sectionsClass.classList.remove('active-link')
    }
})
}
window.addEventListener('scroll', scrollActive)

/*=============== PARALLAX ===============*/
let parallax=  new Rellax('.parallax');
// vanilla javascript parallax library

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__village', 1.2, {opcity: 0 , y:100, delay: 0.1})
gsap.from('.home__pine', 1.2, {opcity: 0 , y:150, delay: 0.3})
gsap.from('.home__mountain-2', 1.2, {opcity: 0 , x:150, delay: 0.5})
gsap.from('.home__mountain-3', 1.2, {opcity: 0 , x:-150, delay: 0.6})
gsap.from('.home__mountain-1', 1.2, {opcity: 0 , y:250, delay: 0.7})
gsap.from('.home__moon', 1.2, {opcity: 0 , y:200, delay: 0.8})
gsap.from('.home__trineo', 1.2, {opcity: 0 , x:-200, delay: 0.8})
gsap.from('.home__tittle', 1.2, {opcity: 0 , y:-60, delay: 1})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : '2500',
    delay : '400',
})
sr.reveal(`.about__data , .celebrate__img`,{origin: 'right'})
sr.reveal(`.about__img, .celebrate__data`,{origin: 'left'})
sr.reveal(`.send__card`,{interval: '100'})
sr.reveal(`.footer`)