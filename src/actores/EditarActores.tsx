import FormularioActores from "./FormularioActores";

export default function EditarActores(){
    return(
        <>
            <h3>Editar Actores</h3>
            <FormularioActores 
                modelo={
                {nombre: 'Dwayne The Rock Johnson ', 
                fechaNacimiento: new Date('1972-05-02T00:00:00'),
                fotoURL:'https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UX214_CR0,0,214,317_AL_.jpg'}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}