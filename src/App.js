import React from 'react';
import { BrowserRouter as Router ,Switch , Route} from "react-router-dom";
import Navbar from './components/Navbar';
// import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';

import './App.css';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Product}></Route>
              {/* <Route path="/productList" component={ProductList}></Route> */}
              <Route path="/productdetail" component={ProductDetail}></Route>
              <Route path="/cart" component={Cart}></Route>
              <Route component={PageNotFound}></Route>
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}


export default App;