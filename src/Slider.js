
export function Slider(){
    const mostrar = (bg, title) =>{
        var fondo= document.querySelector('body');
        const texto= document.querySelectorAll('.texto-peli');
        fondo.style.backgroundImage=`url("imagenes/${bg}")`;
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

    return(
        <div className="contenedor-slider">
            <div className="contenedor">
                <input type="radio" name="slider" id="item-1"/>
                <input type="radio" name="slider" id="item-2"/>
                <input type="radio" name="slider" id="item-3" defaultChecked/>
                <input type="radio" name="slider" id="item-4"/>
                <input type="radio" name="slider" id="item-5"/>   
                <div className="imagenes">
                    <label className="imagen" onClick={() => mostrar('bg-little-mermaid.jpg', 'the-little-mermaid')} htmlFor="item-1" id="selector-1">
                        <img src={`imagenes/the-little-mermaid.jpeg`} alt=""/></label>
                    <label className="imagen" onClick={() => mostrar('bg-the-black-demon.jpeg','the-black-demon')} htmlFor="item-2" id="selector-2">
                        <img src={`imagenes/the-black-demon.jpg`} alt=""/></label>
                    <label className="imagen" onClick={() => mostrar('bg_Avenger_Endgame1.jpg','Avengers-Endgame')} htmlFor="item-3" id="selector-3">
                        <img src={`imagenes/mini-avengers-endgame.jpeg`} alt=""/></label>
                    <label className="imagen" onClick={() => mostrar('bg-the-tank.jpeg','the-tank')} htmlFor="item-4" id="selector-4">
                        <img src={`imagenes/the-tank.jpeg`} alt=""/></label>
                    <label className="imagen" onClick={() => mostrar('bg-65.jpeg','the-65')} htmlFor="item-5" id="selector-5">
                        <img src={`imagenes/the-65.jpg`} alt=""/></label>
                </div>
            </div>
        </div>
    );
}