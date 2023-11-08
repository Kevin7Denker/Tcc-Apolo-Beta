import { Genero } from "../Types/Genero";
import { Usuario } from "./Usuario";

export interface Comunidade{
    nome: String,
    genero: Genero,
    Usuarios: Usuario[],
}