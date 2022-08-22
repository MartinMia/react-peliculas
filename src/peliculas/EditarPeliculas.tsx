import { actorPeliculaDTO } from "../actores/actores.model";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas(){

    const generosNoSeleccionados: generoDTO[]=[
        
        {id:2, nombre:'Drama'}
        
    ]

    const generosSeleccionados: generoDTO[]=[
        {id:1, nombre:'Accion'},
        
        {id:3, nombre:'Comedia'}
    ]

    const cinesNoSeleccionados: cineDTO[]=[
        
        {id:2, nombre:'PlayCinema'}
        
    ]

    const cinesSeleccionados: cineDTO[]=[
        {id:1, nombre:'CinemaCenter'},
        
        {id:3, nombre:'CRM Cinema'}
    ]

    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id:1, 
            nombre:'Dwayne Johnsonn',
            personaje:'', 
            foto:'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg'
        }
    ]

    return(
        <>
            <h3>Editar Pelicula</h3>
            <FormularioPeliculas 
                actoresSeleccionados={actoresSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                cinesNoSeleecionados={cinesNoSeleccionados}
                cinesSeleecionados={cinesSeleccionados}
                modelo={{titulo:'Rampage',enCines: true, trailer:'url',
                fechaLanzamiento: new Date('2019-01-01T00:00:00')}}
                onSubmit={valores => console.log(valores)
                }/>
        </>
    )
} 