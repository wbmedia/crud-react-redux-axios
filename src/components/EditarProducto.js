import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
} from 'reactstrap';

import { useDispatch, useSelector } from 'react-redux';

import { startProductEditionAction } from '../actions/productoActions';

const EditarProducto = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: '',
  });

  const productoAEditar = useSelector(
    (state) => state.productos.productoeditar
  );

  useEffect(() => {
    guardarProducto(productoAEditar);
  }, [productoAEditar]);

  const { nombre, precio } = producto;

  const onChangeFormulario = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const submitEditProduct = (e) => {
    e.preventDefault();
    dispatch(startProductEditionAction(producto));
    history.push('/');
  };

  return (
    <Row className="justify-content-center">
      <Col lg={8}>
        <Card>
          <CardBody>
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <hr></hr>
            <Form onSubmit={submitEditProduct}>
              <FormGroup>
                <Label>
                  <small>Nombre Producto:</small>
                </Label>
                <Input
                  name="nombre"
                  placeholder="ingrese un nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
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
                  onChange={onChangeFormulario}
                />
              </FormGroup>

              <Button className="btn btn-dark font-weight-bold text-uppercase d-block w-100">
                Guardar Cambios
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EditarProducto;
