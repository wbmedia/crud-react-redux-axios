import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const EditarProducto = () => {
  return (
    <Row className="justify-content-center">
      <Col lg={8}>
        <Card>
          <CardBody>
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <hr></hr>
            <Form>
              <FormGroup>
                <Label><small>Nombre Producto:</small></Label>
                <Input name="nombre" placeholder="ingrese un nombre" />
              </FormGroup>
              <FormGroup>
                <Label><small>Precio Producto:</small></Label>
                <Input type="number" name="precio" placeholder="precio producto" />
              </FormGroup>

              <Button className="btn btn-dark font-weight-bold text-uppercase d-block w-100">Guardar Cambios</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EditarProducto;
