import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
import alertaReduces from './alertaReducer';


export default combineReducers({
    productos: productosReducer,
    alerta: alertaReduces
})