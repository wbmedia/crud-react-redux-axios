import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_SUCCESS,
    AGREGAR_PRODUCTO_FAILURE
} from "../types";

// crear productos
export function createNuevoProductoAction(producto) {
    return () => {
        console.log(producto);
    };
}