import { ReactElement } from "react"

export default function ProyectarContenido(props: proyectarContenidoProps){
    return(
        <>
            <h3>Parte Superior</h3>

            {props.children}

            <h3>Parte Inferior</h3>
        </>
    )
}

interface proyectarContenidoProps{
    children: ReactElement
}