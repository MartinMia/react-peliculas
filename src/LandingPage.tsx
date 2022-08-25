import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landinPageDTO } from "./peliculas/peliculas.model";
import { urlPeliculas } from "./utils/endpoint";

export default function LandingPage(){


    const [peliculas, setPeliculas] = useState<landinPageDTO>({})

  useEffect(() =>{
      axios.get(urlPeliculas)
      .then((respuesta: AxiosResponse<landinPageDTO>)=>{
        setPeliculas(respuesta.data);
      } )
    },[])

    return(
        <>

            <h3>En Cartelera</h3>

            <ListadoPeliculas  peliculas={peliculas.enCines}/>

            <h3>Próximos Estrenos</h3>

            <ListadoPeliculas  peliculas={peliculas.proximosEstrenos}/>  

        </>          
    )
}