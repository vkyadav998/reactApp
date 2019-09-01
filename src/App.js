import React from 'react';
import { Switch , Route, Link} from "react-router-dom";
// import Navbar from './Navbar';
import Home from './components/Home';
import ProductList from './components/Productlist';
import ProductDetail from './components/ProductDetail';

import './App.css';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand" >Home</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/productdetail'} className="nav-link">Product Detail</Link>
              </li>
            </ul> */}
          </div>

          <button className="btn btn-outline-success my-2 my-sm-0">
            <Link to="/productlist"> Your Shop</Link>
          </button>
        </nav>
        {/* <Navbar /> */}

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/productlist" component={ProductList}></Route>
            <Route path="/productdetail" component={ProductDetail}></Route>
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;