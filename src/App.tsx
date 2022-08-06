import React, { useState } from 'react';
import './App.css';
import FormularioTexto from './FormularioTexto';
import MostrarTexto from './MostrarTexto';
import EjemploUseEffect from './EjemploUseEffect';
import ValorContext from './ValorContext';
import Abuelo from './Abuelo';

function App() {

  const [texto, setTexto]= useState('Valor por defecto')
  const [checked, setChecked]= useState(true)

  //const imagenURL ="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png";

  //const manejarClick = () => console.log('click');
  
  const manejarKeyUp = (textoInput: string) =>{
     console.log(textoInput);
     setTexto(textoInput);
  }

  //const parteInter = <EjemploReloj/>

  /* const estilo ={
    backgroundColor:'red',
    width:'50px',
    height:'50px',
    marginLeft:'1rem'
  } */

  /* const parteInf=<div style={estilo}></div>

  const calificaciones=[
    {nom:'Martin',calificacion:85},
    {nom:'Julita',calificacion:95},
    {nom:'Ricardo',calificacion:85}
  ] */

  return (
    <>
      <h1 className="rojo">Hola Mundo!</h1>

      <ValorContext.Provider value={texto}>
        <Abuelo />
      </ValorContext.Provider>

      <div>
        <input type="checkbox"  
        onChange={(e) => setChecked(e.currentTarget.checked)}
        checked={checked}/> Mostrar componente useEffect
      </div>

      {checked ? <EjemploUseEffect /> : null} 

      {/*calificaciones.map(cal => <ContenidoDinamico key ={cal.nom} {...cal}/>)*/}

               

      <button 
        onMouseEnter={() => console.log('entrando')}  
        onClick={()=> console.log('click desde el boton')}>Clickeame
      </button>
      
      <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)}/>

      <MostrarTexto texto={texto}/>     

      <div>
        <input type="checkbox"  
        onChange={(e) => setChecked(e.currentTarget.checked)}
        checked={checked}/> Este es un checkbox
      </div>
    </>
  );
}

export default App;
