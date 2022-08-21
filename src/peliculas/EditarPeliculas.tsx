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

    return(
        <>
            <h3>Editar Pelicula</h3>
            <FormularioPeliculas 
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                modelo={{titulo:'Rampage',enCines: true, trailer:'url',
                fechaLanzamiento: new Date('2019-01-01T00:00:00')}}
                onSubmit={valores => console.log(valores)
                }/>
        </>
    )
} 