

export function InfoMovie({movie, active =''}){
    const movies= (info) =>{
        switch (movie) {
            case "the-little-mermaid":
                return (
                    <>
                    <h2>2h | 15min</h2>
                    <p>info Sirenita
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae optio tenetur eveniet amet veniam corporis incidunt pariatur repellendus provident facilis, numquam sit? Nam nihil dignissimos est blanditiis cupiditate beatae officia?
                    </p>
                    </>
                    );
                break;
            case "the-black-demon":
                return (
                    <>
                    <h2>1h | 40min</h2>
                    <p>info black demon
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae optio tenetur eveniet amet veniam corporis incidunt pariatur repellendus provident facilis, numquam sit? Nam nihil dignissimos est blanditiis cupiditate beatae officia?
                    </p>
                    </>
                    
                    );
                break;
            case "Avengers-Endgame":
                return (
                    <>
                    <h2>3h | 2min</h2>
                    <p>Info Avengers-Endgame
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae optio tenetur eveniet amet veniam corporis incidunt pariatur repellendus provident facilis, numquam sit? Nam nihil dignissimos est blanditiis cupiditate beatae officia?
                    </p>
                    </>
                    
                    );
                break;
            case "the-tank":
                return (
                    <>
                    <h2>1h | 40min</h2>
                    <p>info The tank
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae optio tenetur eveniet amet veniam corporis incidunt pariatur repellendus provident facilis, numquam sit? Nam nihil dignissimos est blanditiis cupiditate beatae officia?
                    </p>
                    </>
                    
                    );
                break;
            case "the-65":
                return (
                    <>
                    <h2>1h | 33min</h2>
                    <p>info 65
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae optio tenetur eveniet amet veniam corporis incidunt pariatur repellendus provident facilis, numquam sit? Nam nihil dignissimos est blanditiis cupiditate beatae officia?
                    </p>
                    </>
                    
                    );
                break;
            
        }


    }
    return(
            <div className= {`texto-peli ${movie} ${active}`}>
                <img
                src={`imagenes/${movie}-title.png`} className="movie-title" alt=""
                />
                
                {movies()}
                
                
                <div className="trailer">
                    <h3><i className="fa-solid fa-circle-play"></i> Ver trailer</h3>
                </div>
            </div>
            
            

    );
}