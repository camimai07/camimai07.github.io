export function Navbar() {
    return (
      
        <nav>
              <div className="logo">
                  <h1>iMovies</h1>
              </div>
  
              <ul>
                  <li><i className="fa-solid fa-house fa-2xs"></i></li>
                  <li><a href="#">Películas</a></li>
                  <li><a href="#">Series</a></li>
                  <li><a href="#">Infantil</a></li>
                  <li><a href="#">Mi lista</a></li>
  
              </ul>
              <div className="buscar">
                  <span className="material-symbols-outlined">Search</span><p>Buscar</p>
              </div>
        </nav>
      
      
    );
  }