const nav = document.querySelector('nav')
const menuBtn = document.querySelector('.menu-btn')
const burger = document.querySelector('.menu-btn__burger')
const li = document.querySelectorAll('.menu-nav__item')

menuBtn.addEventListener('click' , ()=>{
    nav.classList.toggle('open')
    burger.classList.toggle('open')
    li.forEach(a =>{
        a.classList.toggle('open')
        a.classList.add('active')
        
    })
})