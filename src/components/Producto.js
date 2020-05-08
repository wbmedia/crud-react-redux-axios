import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Swal from "sweetalert2";

// Redux
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productoActions";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  const confirmDeleteProduct = (id) => {
    Swal.fire({
      title: "Estas Seguro?",
      text: "Este Producto se eliminara definitivamente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
      cancelButtonText:"Cancelar"
    }).then((result) => {
      if (result.value) {
        dispatch(deleteProductAction(id));
      }
    });
  };

  return (
    <Fragment>
      <tr>
        <td>{id}</td>
        <td>{nombre}</td>
        <td>$ {precio}</td>
        <td>
          <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
            Editar
          </Link>
          <Button
            className="btn btn-danger"
            type="button"
            onClick={() => confirmDeleteProduct(id)}
          >
            Eliminar
          </Button>
        </td>
      </tr>
    </Fragment>
  );
};

export default Producto;
