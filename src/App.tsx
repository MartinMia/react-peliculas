import logo from './logo.svg';
import './App.css';

function App() {
  
  const subtitulo = "Subtitulo"

  const duplicar = (valor:number) => valor*2;

  const imagenURL ="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png";

  return (
    <div>
      <h1>Hola Mundo!</h1>
      <h3>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <img src={imagenURL} alt="logo react"/>
      <div>
        <input type="checkbox" /> Este es un checkbox
      </div>
    </div>
  );
}

export default App;
