import axios from "axios";
import { useHistory } from 'react-router-dom';
import { urlGeneros } from '../utils/endpoint';
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./generos.model";

export default function CrearGenero(){
    const history = useHistory();

    async function crear(genero: generoCreacionDTO){
        try{
            await axios.post(urlGeneros, genero);
            history.push('/generos');
        }
        catch(error){
            console.error(error);
        }
    }

    return(
        <>
            <h3>Crear Género</h3>

            <FormularioGeneros modelo={{nombre:''}}
                onSubmit={async valores => {
                    await crear(valores);
                }}
            />

        </>
        
    )
}