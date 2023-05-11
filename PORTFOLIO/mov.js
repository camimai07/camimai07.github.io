const cursor = document.querySelector('.cursor');
const seccion_home = document.querySelector('#Home');


seccion_home.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';
})


seccion_home.addEventListener('mouseout', ()=>{
    cursor.style.display = 'none';
})

const btn = document.querySelector('.btn2');

btn.addEventListener('click', () =>{
    document.body.classList.toggle('white');
    let btn2 =  document.querySelector('.btn2');
    btn2.classList.toggle('active');
    let me = document.querySelector('#Me');
    me.classList.toggle('transicion')
});