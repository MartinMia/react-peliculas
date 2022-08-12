import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";

import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";

import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";

import LandingPage from "./LandingPage";

import CrearPeliculas from "./peliculas/CrearPelicula";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";

const rutas = [
    {path: '/generos', componente: IndiceGeneros},
    {path: '/generos/crear', componente: CrearGenero},
    {path: '/generos/editar', componente: EditarGenero},

    {path: '/actores', componente: IndiceActores},
    {path: '/actores/crear', componente: CrearActores},
    {path: '/actores/editar', componente: EditarActores},

    {path: '/cines', componente: IndiceCines},
    {path: '/cines/crear', componente: CrearCines},
    {path: '/cines/editar', componente: EditarCines},

    {path: '/peliculas/filtrar', componente: FiltroPeliculas},
    {path: '/peliculas/crear', componente: CrearPeliculas},
    {path: '/peliculas/editar', componente: EditarPeliculas},

    {path: '/', componente: LandingPage, exact:true}
];

export default rutas; 