import { Artista } from "../../artistas/models/artista";

export interface Cancion {
    id?: number;
    nombre: string;
    duracion:number;
    reproducciones:number;
    generoMusical:string[];
    artista:Artista;
    album:string;
}