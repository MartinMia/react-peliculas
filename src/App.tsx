import React, { useEffect, useState } from 'react';
import './App.css';
import ListadoPeliculas from './peliculas/ListadoPeliculas';
//import PeliculaIndividual from './peliculas/PeliculaIndividual';
import { landinPageDTO} from './peliculas/peliculas.model';


function App() {

  const [peliculas, setPeliculas] = useState<landinPageDTO>({})

  useEffect(() =>{
    const timerId = setTimeout(() =>{
      setPeliculas({
        enCartelera:
        [
          { 
            id: 1, 
      
            titulo: 'Spider-Man: Far From Home',
      
            poster:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.appocalypse.co%2Fwp-content%2Fuploads%2F2019%2F08%2FSpider-Man-Far-From-Home-Extended-Cut-Poster.jpg&f=1&nofb=1'
          },
          { 
            id: 2, 
      
            titulo: 'Shrek',
      
            poster:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpicfiles.alphacoders.com%2F348%2F348761.jpg&f=1&nofb=1'
          }
        ],
        proximosEstrenos: 
        [
          {
            id: 3, 
      
            titulo: 'Soul',
      
            poster:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.theposterdb.com%2Fprod%2Fpublic%2Fimages%2Fposters%2Foptimized%2Fmovies%2F158102%2FJCLVxoPCqGSSCiSsKwOYeHRzFqQHT3fEEVfCeLpC.jpg&f=1&nofb=1'
          }
        ]
      })
    }, 3000);

    return () => clearTimeout(timerId);
  })

  return (

    <>

       <h3>En Cartelera</h3>

       <ListadoPeliculas  peliculas={peliculas.enCartelera}/>

       <h3>Próximos Estrenos</h3>

       <ListadoPeliculas  peliculas={peliculas.proximosEstrenos}/>
    </>

  );
}

export default App;
