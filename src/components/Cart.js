import React, { Component } from 'react';
import '../style/cart.css'
import Title from './Title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux';

class Cart extends Component{
  render(){

    let selProducts = this.props.products.filter(asset => asset.inCart === true);
    let selectedAssets = selProducts.map( (asset, i) => 
      <div className="card cartCard" key={i}>
        <div className="row no-gutters">
          <div className="col-md-2">
            <img src={asset.img} className="cart-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{asset.title} - {asset.company}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-between">
            <div>
              <div className="cartCardPrice">
                {asset.price},000 /-
              </div>
            </div>
            <div className='removeIcon' onClick={()=>{this.props.removeFromCart(asset)}} aria-hidden="true">&times;</div>
          </div>
        </div>
      </div>
    )

    let emptyCart = <div className="alert alert-secondary emptyCart" role="alert">
                      <h5 className="text-center"><FontAwesomeIcon icon={faDolly}/>Your Cart is Empty </h5>
                    </div>
    let title = <Title name="Your" heading="Cart"/>
    return (
      <React.Fragment>
        {selProducts.length?title:''}
        {selProducts.length?selectedAssets:emptyCart}
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
    removeFromCart : (item) => {dispatch({type : "REMOVE_FROM_CART", payload : item})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);