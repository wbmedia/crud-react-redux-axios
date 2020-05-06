import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_SUCCESS,
    AGREGAR_PRODUCTO_FAILURE
} from "../types";

const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}