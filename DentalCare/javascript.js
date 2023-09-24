
//----MOVIMIENTO AL SCROLLEAR
window.addEventListener("scroll", function(){
  var navbar = document.querySelector("nav");
  var items_menu = document.querySelector(".items_menu");
  navbar.classList.toggle("scroll", this.window.scrollY>0);
  
  var flecha = document.getElementById("stick");
  flecha.classList.toggle("sticky", this.window.scrollY>0);
  
  /*var animacion = document.getElementById("caja-1");
  animacion.classList.toggle("animate__fadeInRight", this.window.scrollY>0);
  var animacion = document.getElementById("caja-2");
  animacion.classList.toggle("animate__fadeInLeft", this.window.scrollY>200);
  var animacion = document.getElementById("caja-3");
  animacion.classList.toggle("animate__fadeInRight", this.window.scrollY>400);
  var animacion = document.getElementById("caja-4");
  animacion.classList.toggle("animate__fadeInLeft", this.window.scrollY>600);
*/
})

document.querySelector(".contenedor_menu").addEventListener("click", animation_menu);

var linea1__menu = document.querySelector(".linea_1__menu");
var linea2__menu = document.querySelector(".linea_2__menu");
var linea3__menu = document.querySelector(".linea_3__menu");
var items_menu = document.querySelector("nav ul")
// var nav = document.querySelector('nav')

function animation_menu(){
    linea1__menu.classList.toggle('activeline1__menu');
    linea2__menu.classList.toggle('activeline2__menu');
    linea3__menu.classList.toggle('activeline3__menu');
    items_menu.classList.toggle('items_menu')
    // nav.classList.toggle('nav_color')
}




// var menu_close = document.querySelector('.menu');
// menu_close.addEventListener('click', ()=>{
//   menu_close.classList.toggle('close');
// })




//----ACTIVO CLASE MESSAGE1
setTimeout(()=>{
var elemento= document.getElementById("div");
elemento.classList.toggle("message1");
}, 3000);

//----REMUEVO CLASE MESSAGE1 CON CLICK
var ventana = document.getElementById("oka");
ventana.addEventListener("click", clicked)
function clicked(){
  document.getElementById("div").classList.remove("message1")
}



//----ANIMACION SERVICIOS CON CLICK EN NAV

var quienessomos = document.getElementById("service");
quienessomos.addEventListener("click", click);
function click(){
  document.getElementById("a").classList.toggle("animate__flipInY");
  document.getElementById("b").classList.toggle("animate__flipInY");
  document.getElementById("c").classList.toggle("animate__flipInY");
  document.getElementById("d").classList.toggle("animate__flipInY");
  document.getElementById("e").classList.toggle("animate__flipInY");
  document.getElementById("f").classList.toggle("animate__flipInY");
}

//------media-querys-----

// const mediumBp = matchMedia("(max-width: 1050px)");
// const changeSize = mql => {
//   mql.matches
//   ? document.getElementById("caja-1").classList.toggle("animate__fadeInRight", this.window.scrollY>300)
//   : document.getElementById("caja-1").classList.toggle("animate__fadeInRight", this.window.scrollY>500)
  
// }

// mediumBp.addEventListener(changeSize);
// changeSize(mediumBp);

// function slide(){
//     let slideValue = document.getElementsByClassName("slider").value;
//     document.getElementsByClassName(".container .my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
//     console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");
// }

// function initComparisons() {
//     var x, i;
//     x = document.getElementsByClassName("img-comp-overlay");
//     for (i = 0; i < x.length; i++) {
//       compareImages(x[i]);
//     }
//     function compareImages(img) {
//       var slider, img, clicked = 0, w, h;
//       w = img.offsetWidth;
//       h = img.offsetHeight;
//       img.style.width = (w / 2) + "px";
      
//       /*slider:*/
//       slider = document.createElement("DIV");
//       slider.style.zIndex = "10";
//       slider.setAttribute("class", "img-comp-slider");
//       img.parentElement.insertBefore(slider, img);
//       slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
//       slider.addEventListener("mousedown", slideReady);
//       window.addEventListener("mouseup", slideFinish);
//       slider.addEventListener("touchstart", slideReady);
//       window.addEventListener("touchend", slideFinish);
//       function slideReady(e) {
        
//         e.preventDefault();
//         clicked = 1;
//         window.addEventListener("mousemove", slideMove);
//         window.addEventListener("touchmove", slideMove);
//       }
//       function slideFinish() {
//         clicked = 0;
//       }
//       function slideMove(e) {
//         var pos;
//         if (clicked == 0) return false;
//         pos = getCursorPos(e)
//         if (pos < 0) pos = 0;
//         if (pos > w) pos = w;
//         slide(pos);
//       }
//       function getCursorPos(e) {
//         var a, x = 0;
//         e = e || window.event;
//         a = img.getBoundingClientRect();
//         x = e.pageX - a.left;
//         x = x - window.pageXOffset;
//         return x;
//       }
//       function slide(x) {
//         img.style.width = x + "px";
//         slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
//       }
//     }
//   }
  
//   initComparisons();