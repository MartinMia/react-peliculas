import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import Cargnado from "../utils/Cargando";
import { urlPeliculas } from "../utils/endpoint";
import { convertirPeliculaAFormData } from "../utils/FormDataUtils";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioPeliculas from "./FormularioPeliculas";
import { peliculaCreacionDTO, peliculasPostGetDTO } from "./peliculas.model";

export default function CrearPeliculas(){

    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState<generoDTO[]>([]);
    const [cinesNoSeleccionados, setCinessNoSeleccionados] = useState<cineDTO[]>([]);
    const [cargado,setCargado] = useState(false);
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);

    useEffect(()=>{
        axios.get(`${urlPeliculas}/postget`)
        .then((respuesta: AxiosResponse<peliculasPostGetDTO>)=>{
            setGenerosNoSeleccionados(respuesta.data.generos);
            setCinessNoSeleccionados(respuesta.data.cines);
            setCargado(true);
        })
    },[])

    async function crear(pelicula: peliculaCreacionDTO){
        try{
             const formData = convertirPeliculaAFormData(pelicula);
             await axios({
                 method:'post',
                 url: urlPeliculas,
                 data: formData,
                 headers:{'Content-Type': 'multipart/form-data'}
             }).then((respuesta: AxiosResponse<number>)=> {
                history.push(`/pelicula/${respuesta.data}`);
             })
        }
        catch(error){
            setErrores(error.response.data);
        }
    }

    return(
        <>
            <h3>Crear Peliculas</h3>
            <MostrarErrores errores={errores}/>
            {cargado ? <FormularioPeliculas
                actoresSeleccionados={[]}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={[]}
                cinesNoSeleecionados={cinesNoSeleccionados}
                cinesSeleecionados={[]}
                modelo={{titulo:'',enCines: false, trailer:''}}
                onSubmit={async valores => await crear(valores)}
            />: <Cargnado/>}
            
        </>
    )
} 