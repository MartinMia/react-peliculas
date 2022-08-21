import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./actores.model";

export default function TypeAheadActores(props: typeAheadActoresProps){

    const actores: actorPeliculaDTO[] =[
        {
            id:1, 
            nombre:'Dwayne Johnsonn',
            personaje:'', 
            foto:'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg'
        },

        {
            id:2, 
            nombre:'Scarlett Johansson',
            personaje:'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg', 
            foto:''
        },

        {
            id:3, 
            nombre:'Ryan Gosling',
            personaje:'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_UY317_CR18,0,214,317_AL_.jpg', 
            foto:''
        }
    ]

    return(
        <>
        
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actor => {
                    console.log(actor);
                }}    

                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
            />

        </>
    )
}

interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
}