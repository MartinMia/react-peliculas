import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
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
            personaje:'', 
            foto:'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY317_CR23,0,214,317_AL_.jpg'
        },

        {
            id:3, 
            nombre:'Ryan Gosling',
            personaje:'', 
            foto:'https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_UY317_CR18,0,214,317_AL_.jpg'
        }
    ]

    const seleccion: actorPeliculaDTO[] = []

    return(
        <>
        
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actores => {
                    if(props.actores.findIndex(x => x.id === actores[0].id) === -1){
                        props.onAdd([...props.actores, actores[0]]);
                    }
                }}    

                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor => (
                    <>
                    
                        <img src={actor.foto} alt="imagen actor"
                            style={{
                                height:'64px',
                                marginRight:'10px',
                                width:'64px'
                            }}
                        />

                        <span>{actor.nombre}</span>

                    </>
                )}
            />

            <ul className="list-group">

                {props.actores.map(actor =>
                <li 
                    className="list-group-item list-group-item-action"
                    key={actor.id}>
                    {props.listadoUI(actor)}
                    <span className="badge badge-primary badge-pill pointer"
                        style={{marginLeft:'0.5rem',
                                color:"black"}}
                        onClick={() => props.onRemove(actor)}
                    >
                        X    
                    </span>
                </li>)}
            </ul>

        </>
    )
}

interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]):void;
    listadoUI(actor: actorPeliculaDTO):ReactElement;
    onRemove(actor: actorPeliculaDTO):void;
}