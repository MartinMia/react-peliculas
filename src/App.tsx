import logo from './logo.svg';
import './App.css';
import AppCSS from './App.module.css'

function App() {
  
const cuadradoAzul ={
  backgroundColor:'blue',
   width:'50px',
   height:'50px',
  marginLeft:'1rem'
}

  const subtitulo = "Subtitulo"

  const duplicar = (valor:number) => valor*2;

  const imagenURL ="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png";

  return (
    <div>
      <h1 className="rojo">Hola Mundo!</h1>

      <div className="cuadradoRojo"></div>  
      <div style={{backgroundColor:'green', width:'50px',height:'50px',marginLeft:'1rem'}}></div>  
      <div style={cuadradoAzul}></div>  

      <h3 style={{color:'blue'}}>{subtitulo.toUpperCase()}</h3>
      <h4 className='color'>Index.css:El doble de 3 es {duplicar(3)}</h4>
      <h4 className={AppCSS.color}>App.module.css</h4>
      <img src={imagenURL} alt="logo react"/>
      <div>
        <input type="checkbox" /> Este es un checkbox
      </div>
    </div>
  );
}

export default App;
