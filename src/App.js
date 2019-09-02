import React from 'react';
import { Switch , Route, Link} from "react-router-dom";
// import Navbar from './Navbar';
// import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './App.css';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <Link to="/" className="navbar-brand" >Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="navbar-collapse"></div>
          {/* <Link className="btn btn-outline-primary my-2 my-sm-0" to="/productList">Products</Link> */}
          <Link className="btn btn-outline-primary my-2 my-sm-0" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /> Your Cart</Link>
        </nav>
        {/* <Navbar /> */}

        <div className="container">
          <Switch>
            <Route exact path="/" component={Product}></Route>
            {/* <Route path="/productList" component={ProductList}></Route> */}
            <Route path="/productdetail" component={ProductDetail}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;