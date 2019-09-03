import React from 'react';
import '../style/productlist.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux';
class ProductList extends React.Component{
  render(){
    // const bikeUrl = 'https://images.pexels.com/photos/40904/bmw-k-1300-metallic-motorcycle-40904.jpeg';
    // let productData = [1,2,3,4,5,6,7,8,9,10];
    let productList = this.props.products.map((product, i) => 
      <div className="col-sm-3 col-xs-12" key={i}>
        <div className="card productCard">
          <img src={product.img} className="pdt-img" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">Price : {product.price},000 /-</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-info"><FontAwesomeIcon icon={faEye} /></button>
              <button className="btn btn-outline-warning" onClick={()=>{this.props.addToCart(product)}}>{product.inCart?'Added':'Add to cart'}</button>
            </div>
          </div>
        </div>    
      </div>
    )
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="row">
          {productList}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.products
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    addToCart : (item) => {dispatch({type : "ADD_TO_CART", payload : item})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);