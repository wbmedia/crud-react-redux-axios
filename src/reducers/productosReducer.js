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
} from "../types";

const initialState = {
  productos: [],
  error: false,
  loading: false,
  productoeliminar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    
    // ADD PRODUCT REDUCER
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_PRODUCTO_SUCCESS:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };
    case AGREGAR_PRODUCTO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // FETCH PRODUCT REDUCER  
    case FETCH_PRODUCTOS:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_PRODUCTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        productos: action.payload,
      };
    case FETCH_PRODUCTOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // DELETE PRODUCT REDUCER
    case DELETE_PRODUCT:
      return {
        ...state,
        productoeliminar: action.payload,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        productos: state.productos.filter(
          (productos) => productos.id !== state.productoeliminar
        ),
        productoeliminar: null
      };
    case DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }  
    default:
      return state;
  }
}
