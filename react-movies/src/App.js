import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss';
import YouTube from 'react-youtube';
// import { VscGithubInverted } from "react-icons/vsc";

function App() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '2ff4d843217fb0e2e27bfaa824d27ece'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  //variables de estado
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState('') 
  const [trailer, setTrailer] = useState(null)
  const [movie, setMovie] = useState ({title: 'Loading Movies'})
  const [playing, setPlaying] = useState(false)

  //func peticion por get a la api
  const fetchMovies = async(searchKey) =>{
    const type = searchKey ? 'search' : 'discover'
    const {data: {results},
  } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });

  setMovies(results)
  setMovie(results[0])

  if(results.length){
    await fetchMovie(results[0].id)
  }
  }



//func para la peticion de un solo objeto y mostrar en reproductor
  const fetchMovie = async(id)=>{
    const {data} = await axios.get(`${API_URL}/movie/${id}`,{
      params:{
        api_key: API_KEY,
        append_to_response: "videos"
      }
    })
    //validaciones
    if(data.videos && data.videos.results){
      const trailer = data.videos.results.find(
        (vid) => vid.name === 'Official Trailer'
      );
      setTrailer(trailer ? trailer : data.videos.results[0])
    }
    setMovie(data)
  }

  const selectMovie = async(movie)=>{
    fetchMovie(movie.id)
    setMovie(movie)
    window.scrollTo(0,0)
  }

  //funcion para buscar
  const searchMovies = (e)=>{
    e.preventDefault();
    fetchMovies(searchKey)
  }

  useEffect(()=>{
    fetchMovies()
  },[])

  return (
    <div>
      <h1 className='titulo'>T R A I L E R M O V I E S</h1>
      <form className='search' onSubmit={searchMovies}>
        <input className='label' type='text' placeholder='search' onChange={(e)=>setSearchKey(e.target.value)}/>
        <button className='btn'>Buscar</button>
      </form>
      <h1>Listado de películas</h1>
      <div className='banner'>
      {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="btn btnTrailer close">
                    Close
                  </button>
                </>
              ) : (
                <div className="container">
                  <div>
                    {trailer ? (
                      <button
                        className="btn btnTrailer"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <div className='descripcion'>
                      <h2 className="text">{movie.title}</h2>
                      <p className="text">{movie.overview}</p>
                    </div>
                    
                  </div>
                </div>
              )}
            </div>
          ) : null}
      </div>
      <div className='container'>
        <div className='container__fila'>
          {movies.map((movie)=>(
            <div key={movie.id} className='card' onClick={()=> selectMovie(movie)}>
              <img src={`${URL_IMAGE + movie.poster_path}`} alt='' />
              <h2 className='name_movie'>{movie.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
