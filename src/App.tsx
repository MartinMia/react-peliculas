import React from 'react';
import './App.css';
import PeliculaIndividual from './peliculas/PeliculaIndividual';
import { pelicula } from './peliculas/peliculas.model';


function App() {

  const peliculaPrueba: pelicula={

    id: 1, 
    titulo: 'Spider-Man: Far From Home',
    poster:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.appocalypse.co%2Fwp-content%2Fuploads%2F2019%2F08%2FSpider-Man-Far-From-Home-Extended-Cut-Poster.jpg&f=1&nofb=1'

  }

  return (

    <>

       <PeliculaIndividual pelicula={peliculaPrueba}/>
       
    </>

  );
}

export default App;
