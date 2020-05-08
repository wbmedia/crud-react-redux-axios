import React, { Fragment, useEffect } from "react";
import { Table, Container, Row } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { getProductsActions } from "./../actions/productoActions";

import Producto from "./Producto";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch api
    const getProducts = () => dispatch(getProductsActions());
    getProducts();
  }, []);

  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);
  return (
    <Fragment>
      <Container>
        <Row>
          <h2 className="text-center my-5">Listado de Productos</h2>
          {error ? (
            <p className="font-weigth-bold alert alert-danger text-center mt-4">
              Woops hubo un error al cargar los productos
            </p>
          ) : null}
          {cargando ? (
            <p className="font-weigth-bold text-center">Loading ...</p>
          ) : null}
          <Table className="table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.length === 0
                ? "No Products Added Yet!!"
                : productos.map((producto) => (
                    <Producto key={producto.id} producto={producto} />
                  ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Products;
