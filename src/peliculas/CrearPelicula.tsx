import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPeliculas(){

    const generos: generoDTO[]=[
        {id:1, nombre:'Accion'},
        {id:2, nombre:'Drama'},
        {id:3, nombre:'Comedia'}
    ]

    const cines: cineDTO[]=[
        {id:1, nombre:'CinemaCenter'},
        {id:2, nombre:'PlayCinema'},
        {id:3, nombre:'CRM Cinema'}
    ]

    return(
        <>
            <h3>Crear Peliculas</h3>
            <FormularioPeliculas
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                cinesNoSeleecionados={cines}
                cinesSeleecionados={[]}
                modelo={{titulo:'',enCines: false, trailer:''}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
} 