import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_SUCCESS,
  AGREGAR_PRODUCTO_FAILURE,
} from "../types";

import clientAxios from "./../config/axios";

import Swal from "sweetalert2";

// crear productos
export function createNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      await clientAxios.post("/productos", producto);
      dispatch(agregarProductoExito(producto));

      Swal.fire("Correcto", "El Producto se agrego con Exito!", "success");
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));
      Swal.fire("Wooops!", "Hubo un error al crear el Producto! intenta nuevamente", "error");
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_SUCCESS,
  payload: producto,
});

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_FAILURE,
  payload: estado,
});
