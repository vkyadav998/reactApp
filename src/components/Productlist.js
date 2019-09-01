import React from 'react';
import '../style/productlist.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

class ProductList extends React.Component{
  render(){
    const bikeUrl = 'https://images.pexels.com/photos/40904/bmw-k-1300-metallic-motorcycle-40904.jpeg';
    let productData = [1,2,3,4,5,6,7,8,9,10];
    let productList = productData.map(product => 
      <div className="col-sm-3 col-xs-12">
        <div className="card productCard">
          <img src={bikeUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Kawasaki Ninja {product}</h5>
            <p className="card-text">Price : 1,20,000/-</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-info"><FontAwesomeIcon icon={faEye} /></button>
              <button className="btn btn-outline-warning">Add to cart</button>
            </div>
          </div>
        </div>    
      </div>
    )
    return (
      <React.Fragment>
        <div className="row">
          {productList}
        </div>
        
        
      </React.Fragment>
    )
  }
}

export default ProductList;