import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {Navbar} from './Navbar';
import { InfoMovie } from './InfoMovie';
import { Slider } from './Slider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
  <div className="contenedor-ppal">
    <Navbar/>
    <div className="texto">
      <InfoMovie movie="the-little-mermaid"/>
      <InfoMovie movie="the-black-demon"/>
      <InfoMovie movie="Avengers-Endgame" active="active"/>
      <InfoMovie movie="the-tank"/>
      <InfoMovie movie="the-65"/>
    </div>
    <Slider/>
  </div>
  
  
);

