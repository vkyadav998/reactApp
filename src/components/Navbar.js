import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../style/navbar.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
  render() {
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
      </React.Fragment>
    )
  }
}
