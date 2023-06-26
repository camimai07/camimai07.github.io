document.querySelector(".menu").addEventListener("click", animation_menu);

var line1__menu = document.querySelector(".line1__menu");
var line2__menu = document.querySelector(".line2__menu");
var line3__menu = document.querySelector(".line3__menu");
var items_menu = document.querySelector("nav ul")

function animation_menu(){
    line1__menu.classList.toggle('activeline1__menu');
    line2__menu.classList.toggle('activeline2__menu');
    line3__menu.classList.toggle('activeline3__menu');
    items_menu.classList.toggle('items_menu');
}









// const cursor = document.querySelector('.cursor');
// const seccion_home = document.querySelector('#Home');


// seccion_home.addEventListener('mousemove', (e) => {
//     let x = e.pageX;
//     let y = e.pageY;
//     cursor.style.top = y + 'px';
//     cursor.style.left = x + 'px';
//     cursor.style.display = 'block';
// })


// seccion_home.addEventListener('mouseout', ()=>{
//     cursor.style.display = 'none';
// })

// const btn = document.querySelector('.btn2');

// btn.addEventListener('click', () =>{
//     document.body.classList.toggle('white');
//     let btn2 =  document.querySelector('.btn2');
//     btn2.classList.toggle('active');
//     let me = document.querySelector('#Me');
//     me.classList.toggle('transicion')
// });