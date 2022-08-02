import { ReactElement
 } from "react"

export default function ProyectarContenido2(props: proyectarContenido2Props){
    return(
        <>
            Parte Superior:{props.parteSup ? props.parteSup: <h3>Contenido por defecto</h3>}
            <hr />
            {props.parteInter}
            <hr />
            {props.parteInf}
        </>
    )
}

interface proyectarContenido2Props{
    parteSup?: ReactElement;
    parteInter: ReactElement;
    parteInf: ReactElement;
    
}