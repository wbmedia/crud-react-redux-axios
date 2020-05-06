import React, { Fragment } from "react";
import {
  Navbar,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to={'/'}>React Crud with Hooks, Redux & Axios</Link>
        <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="btn btn-danger text-white float-rigth" to={'/productos/nuevo'}>Agregar Productos + </Link>
            </NavItem>
          </Nav>
      </Navbar>
    </Fragment>
  );
};

export default Header;
