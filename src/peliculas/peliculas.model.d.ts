export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface landinPageDTO{
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[];
}