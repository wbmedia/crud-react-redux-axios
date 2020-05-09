import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_SUCCESS,
  AGREGAR_PRODUCTO_FAILURE,
  FETCH_PRODUCTOS,
  FETCH_PRODUCTOS_SUCCESS,
  FETCH_PRODUCTOS_FAILURE,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  EDIT_PRODUCT,
  START_PRODUCT_EDITION,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
} from '../types';

import clientAxios from './../config/axios';

import Swal from 'sweetalert2';

// ADD PRODUCTS
export function createNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      await clientAxios.post('/productos', producto);
      dispatch(agregarProductoExito(producto));

      Swal.fire('Correcto', 'El Producto se agrego con Exito!', 'success');
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));
      Swal.fire(
        'Wooops!',
        'Hubo un error al crear el Producto! intenta nuevamente',
        'error'
      );
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

// FETCH PRODUCT
export function getProductsActions() {
  return async (dispatch) => {
    dispatch(getProductos());

    try {
      const response = await clientAxios.get('/productos');
      dispatch(getProductosSuccess(response.data));
    } catch (error) {
      dispatch(getProductosFail(true));
    }
  };
}

const getProductos = () => ({
  type: FETCH_PRODUCTOS,
  payload: true,
});

const getProductosSuccess = (productos) => ({
  type: FETCH_PRODUCTOS_SUCCESS,
  payload: productos,
});

const getProductosFail = (estado) => ({
  type: FETCH_PRODUCTOS_FAILURE,
  payload: estado,
});

// DELETE PRODUCT
export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getDeleteProduct(id));
    try {
      await clientAxios.delete(`/productos/${id}`);
      dispatch(deleteProductSuccess());
      Swal.fire('Eliminado!', 'Tu producto ha sido eliminado.', 'success');
    } catch (error) {
      dispatch(deleteProductFail());
      Swal.fire('Woops!', 'No se pudo eliminar el producto.', 'error');
    }
  };
}

const getDeleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const deleteProductFail = () => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: true,
});

// EDIT PRODUCT

export function getProductoToEdit(producto) {
  return (dispatch) => {
    dispatch(getEditedProduct(producto));
  };
}

const getEditedProduct = (producto) => ({
  type: EDIT_PRODUCT,
  payload: producto,
});

export function startProductEditionAction(producto) {
  return async (dispatch) => {
    dispatch(startEditProducto());
    try {
      await clientAxios.put(`/productos/${producto.id}`, producto);
      dispatch(editarProductoSuccess(producto));
      Swal.fire('En hora buena', 'El Producto se editado con Exito!', 'success');
    } catch (error) {
      dispatch(editarProductoFailure());
    }
  };
}

const startEditProducto = () => ({
  type: START_PRODUCT_EDITION,
});

const editarProductoSuccess = (producto) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: producto,
});

const editarProductoFailure = () => ({
  type: EDIT_PRODUCT_FAILURE,
  payload: true,
});
