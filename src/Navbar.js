import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
// import '../style/navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/productlist">Product List</Link>
              </li>
              <li>
                <Link to={'/productdetail'}>Product Detail</Link>
              </li>
            </ul>
          </nav>
        </Router>
      </React.Fragment>
    )
  }
}
