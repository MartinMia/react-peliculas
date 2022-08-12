import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import rutas from './Route-config';
import Menu from './utils/Menu';
import confgurarValidaciones from "./Validaciones";


confgurarValidaciones();
function App() {

  return (

    <>

        <BrowserRouter>
            <Menu />
            <div className='container'>

                <Switch>
                  
                 {rutas.map(ruta => 
                  <Route key={ruta.path} path={ruta.path}
                    exact={ruta.exact}>
                     <ruta.componente/>
                  </Route>)}

                </Switch>

            </div>
      </BrowserRouter>  
    </>

  );
}

export default App;
