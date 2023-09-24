import React, { useState } from 'react'
import axios from 'axios'
import './App.css';
import YouTube from 'react-youtube';
import { VscGithubInverted } from "react-icons/vsc";

function App() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '81f360bf5dba791635aa23a40d5c632e'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  //VARIABLES DE ESTADO

  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState('')


  return (
    <div>
      <h1>Hola</h1>
      <VscGithubInverted />
    </div>
  );
}

export default App;
