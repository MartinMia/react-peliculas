import EditarEntidad from "../utils/EditarEntidad";
import { urlGeneros } from "../utils/endpoint";
import FormularioGeneros from "./FormularioGeneros";
import { generoDTO,generoCreacionDTO } from "./generos.model";

export default function EditarGenero(){

    return(
        <>

            <EditarEntidad<generoCreacionDTO, generoDTO>
                url={urlGeneros} urlIndice="/generos" nombreEntidad="Géneros">
                {(entidad, editar) =>  
                <FormularioGeneros modelo={entidad}
                    onSubmit={async valores => {
                        await editar(valores)
                }}
            />}
            </EditarEntidad>   
        </>
    )
}