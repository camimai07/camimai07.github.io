
var fondo= document.querySelector('body');


// document.querySelector('.active').style.display='block';

function mostrar(bg, title){
    const texto= document.querySelectorAll('.texto-peli');
    fondo.style.backgroundImage=`url("./imagenes/${bg}")`;
    fondo.style.backgroundSize='cover';
    fondo.style.backgroundPosition='center';
    fondo.style.backgroundAttachment='fixed'; 
    fondo.style.transition='linear 300ms';
    texto.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)){
            content.classList.add('active')
        }
        
    });
}






/*
if (document.querySelector('#item-3').checked){
    fondo.style.backgroundImage='url(../imagenes/image-3.webp)';
    fondo.style.backgroundSize='cover';
    fondo.style.backgroundPosition='center';
    fondo.style.backgroundAttachment='fixed'; 
    fondo.style.transition='linear 300ms';
    document.querySelector('.texto-3').style.opacity='1';

}

// texto_1.style.display='none';

if (document.querySelector('#item-1').checked){
    texto_1.style.opacity='1';

}


item_1.addEventListener('click',()=>{
    fondo.style.backgroundImage = "url(../imagenes/image-1.jpg)";
    // texto_1.style.opacity='1';


})
texto_1.style.opacity='0';

item_2.addEventListener('click',()=>{
    fondo.style.backgroundImage = "url(../imagenes/image-2.jpg)";
   
    

})
item_3.addEventListener('click',()=>{
    fondo.style.backgroundImage = "url(../imagenes/image-3.webp)";

})
item_4.addEventListener('click',()=>{
    fondo.style.backgroundImage = "url(../imagenes/image-4.jpg)";

})
item_5.addEventListener('click',()=>{
    fondo.style.backgroundImage = "url(../imagenes/image-5.jpg)";

})*/

