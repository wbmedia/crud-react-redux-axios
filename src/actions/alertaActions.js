import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from './../types';

// Show Alert

export function showAlerta(alerta) {
    return(dispatch) => {
        dispatch(mostrarAlertaError(alerta))
    }
}

const mostrarAlertaError = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta  
})

export function hideAlert() {
    return (dispatch) => {
        dispatch(ocultarAlerta())
    }
}

const ocultarAlerta = alerta => ({
    type: OCULTAR_ALERTA,
    payload: null
})