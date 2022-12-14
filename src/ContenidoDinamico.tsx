export default function ContenidoDinamico(props: any){
    /* Ejemplo : Operador Ternario
    return(
        <div>
            {props.mostrarMensajeSecreto ? <span>Mensaje Secreto: 42</span> : null }
        </div>
    ) */

    //Ejemplo 2: If

    if(props.calificacion > 90){
        return(
            <div>
                <h3>
                    {props.nom}: Excelente Calificacion
                </h3>
            </div>
        )
    }else if(props.calificacion >= 80 && props.calificacion <= 90){
        return(
            <div>
                <h3>
                {props.nom}: Muy bien
                </h3>
            </div>
        )
    }else if(props.calificacion >= 0 && props.calificacion < 80){
        return(
            <div>
                <h3>
                {props.nom}: lol...
                </h3>
            </div>
        )
    }else{
        throw `Ha habido un error con la calificacion de ${props.nom}`;
    }
}