import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Saludar(){
  const user ={
    Nombre: 'Camila',
    Apellido: 'Maita',
  };
  return (
    <div>
      <h1>{user.Apellido}</h1>
      <h3>{user.Nombre}</h3>
    </div>
  )
  

  
}

root.render(
  <>
    <Saludar/>
    <App />
  </>

);


