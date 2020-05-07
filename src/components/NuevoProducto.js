import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

import { createNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = ({ history }) => {
  // state local
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);

  const dispatch = useDispatch();

  const cargando = useSelector((state) => state.productos.loading);

  const agregarProducto = (producto) =>
    dispatch(createNuevoProductoAction(producto));

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    // validamos
    if (nombre.trim === "" || precio <= 0) {
      return;
    }

    // crear el producto
    agregarProducto({
      nombre,
      precio,
    });

    // redireccion al home
    history.push("/");
  };

  return (
    <Row className="justify-content-center">
      <Col lg={8}>
        <Card>
          <CardBody>
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <hr></hr>
            <Form onSubmit={submitNuevoProducto}>
              <FormGroup>
                <Label>
                  <small>Nombre Producto:</small>
                </Label>
                <Input
                  name="nombre"
                  placeholder="ingrese un nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>
                  <small>Precio Producto:</small>
                </Label>
                <Input
                  type="number"
                  name="precio"
                  placeholder="precio producto"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </FormGroup>

              <Button className="btn btn-dark font-weight-bold text-uppercase d-block w-100">
                Agregar
              </Button>
            </Form>
          </CardBody>
        </Card>
        {cargando ? <p>Loading ... </p> : null}
      </Col>
    </Row>
  );
};

export default NuevoProducto;
