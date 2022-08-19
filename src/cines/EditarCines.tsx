import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines
                modelo={{nombre:'CinemaCenter'}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}