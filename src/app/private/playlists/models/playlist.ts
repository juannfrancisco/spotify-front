import { Cancion } from "../../canciones/models/cancion";

export interface Playlist {
    id?: number;
    nombre: string;
    fechaCreacion?:Date;
    canciones: Cancion[];
}