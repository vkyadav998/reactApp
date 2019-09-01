import React from 'react';
import {withRouter} from 'react-router-dom';

class ProductDetail extends React.Component{
  render(){
    return (
      <React.Fragment>
        <h1> Product 1 Detail </h1>
      </React.Fragment>
    )
  }
}

export default withRouter(ProductDetail);