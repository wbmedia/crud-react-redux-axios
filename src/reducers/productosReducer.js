import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_SUCCESS,
  AGREGAR_PRODUCTO_FAILURE,
} from "../types";

const initialState = {
  productos: [],
  error: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
