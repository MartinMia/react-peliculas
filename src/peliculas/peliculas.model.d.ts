import { actorPeliculaDTO } from "../actores/actores.model";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";

export interface peliculaDTO{
    id: number;
    titulo: string;
    poster: string;
    enCines: boolean;
    trailer: string;
    resumen?: string;
    fechaLanzamiento: Date;
    generos: generoDTO[];
     cines: cineDTO[]; 
     actores: actorPeliculaDTO[];
}

export interface peliculaCreacionDTO{
    titulo: string;
    enCines: boolean;
    trailer: string;
    resumen?: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterURL?: string;
    generosIds?: number[];
    cinesIds?: number[];
    actores?:actorPeliculaDTO[];
}

export interface landinPageDTO{
    enCines?: peliculaDTO[];
    proximosEstrenos?: peliculaDTO[];
}

export interface peliculasPostGetDTO{
     generos: generoDTO[];
     cines: cineDTO[]; 
}

export interface peliculasPutGetDTO{
    pelicula: peliculaDTO;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
    actores: actorPeliculaDTO[];

}