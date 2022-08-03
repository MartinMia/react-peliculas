import React, { useState } from 'react';
import './App.css';
import ContenidoDinamico from './ContenidoDinamico';
import FormularioTexto from './FormularioTexto';
import MostrarTexto from './MostrarTexto';
import ProyectarContenido2 from './ProyectarContenido2';

function App() {

  const [texto, setTexto]= useState('Valor por defecto')
  const [checked, setChecked]= useState(false)

  //const imagenURL ="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png";

  //const manejarClick = () => console.log('click');
  
  const manejarKeyUp = (textoInput: string) =>{
     console.log(textoInput);
     setTexto(textoInput);
  }

  //const parteInter = <EjemploReloj/>

  const estilo ={
    backgroundColor:'red',
    width:'50px',
    height:'50px',
    marginLeft:'1rem'
  }

  const parteInf=<div style={estilo}></div>

  const calificaciones=[
    {nom:'Martin',calificacion:85},
    {nom:'Julita',calificacion:95},
    {nom:'Ricardo',calificacion:85}
  ]

  return (
    <>
      <h1 className="rojo">Hola Mundo!</h1>

      {calificaciones.map(cal => <ContenidoDinamico key ={cal.nom} {...cal}/>)}

      {/* <ProyectarContenido2
        parteSup={<span>Mensaje del componente padre</span>}
        parteInter={parteInter}
        parteInf={parteInf}
      /> */}
         

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
