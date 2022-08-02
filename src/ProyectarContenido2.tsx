import { ReactElement
 } from "react"

export default function ProyectarContenido2(props: proyectarContenido2Props){
    return(
        <>
            {props.parteSup}
            <hr />
            {props.parteInter}
            <hr />
            {props.parteInf}
        </>
    )
}

interface proyectarContenido2Props{
    parteSup: ReactElement;
    parteInter: ReactElement;
    parteInf: ReactElement;
    
}