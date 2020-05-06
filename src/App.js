import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import components
import Header from './components/Header';
import Products from './components/Products';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

// Redux
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header />
      <div className="containe mt-5">
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/productos/nuevo' component={NuevoProducto} />
          <Route exact path='/productos/editar/:id' component={EditarProducto} />
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
