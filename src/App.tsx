import React, { useState } from 'react';
import './App.css';

function App() {

  const [texto, setTexto]= useState('Valor por defecto')
  const [checked, setChecked]= useState(false)

  const imagenURL ="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png";

  const manejarClick = () => console.log('click');
  
  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) =>{
     console.log(e.currentTarget.value);
     setTexto(e.currentTarget.value);
  }

  return (
    <>
      <h1 className="rojo">Hola Mundo!</h1>

      <button 
        onMouseEnter={() => console.log('entrando')}  
        onClick={()=> console.log('click desde el boton')}>Clickeame
      </button>
      
      <input type="text" name="" id=""
        onKeyUp={(e) => manejarKeyUp(e)}
      />
      
      <div>
        {texto}
      </div>

      <img src={imagenURL} alt="logo react"/>
      <div>
        <input type="checkbox"  
        onChange={(e) => setChecked(e.currentTarget.checked)}
        checked={checked}/> Este es un checkbox
      </div>
    </>
  );
}

export default App;
