export default function FormularioTexto(props: formularioTextoProps){
    return(
        <input type="text" name="" id=""
        onKeyUp={(e) => props.manejarKeyUp(e.currentTarget.value)}
      />
    )
}

interface formularioTextoProps{
    manejarKeyUp(texto: string): void  
}