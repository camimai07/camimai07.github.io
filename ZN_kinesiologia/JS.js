window.addEventListener('scroll', ()=>{
    let nav = document.querySelector('nav');
    nav.classList.toggle('miniNav',this.window.scrollY>0);
})