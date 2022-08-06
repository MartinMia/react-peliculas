import { useEffect, useState } from "react"

export default function EjemploUseEffect(){

    const [clicks, setClicks] = useState(0)
    const [fecha, setFecha] = useState(new Date())

    useEffect(() => {
        console.log('Componente cargado click');
        document.title = `${clicks} veces`        

        return () =>{
            console.log('el componente se va a destruir');
            
        }
    }, [clicks])

    useEffect(() => {
        console.log('Componente cargado 2 interval');
        const intervalId = setInterval(() => {
            setFecha(new Date())
        }, 1000)

        return () => clearInterval(intervalId);
    })

    useEffect(() => {
        console.log('voy a ejecutarme una vez');
    },[])

    return(
        <>
            <button onClick={() => setClicks(clicks + 1)}>
                Me has clickeado {clicks} veces
            </button>

            <div>
                {fecha.toString()}
            </div>
        </>
    )
}