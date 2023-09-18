import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Imprimivel[]) {
    objetos.forEach(objeto => objeto.paraTexto())
}