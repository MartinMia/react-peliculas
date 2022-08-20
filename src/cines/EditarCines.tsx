import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines
                modelo={{nombre:'CinemaCenter', latitud:-31.519353519110286, longitud:-68.54158964232829}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}