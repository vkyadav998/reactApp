import React, { Component } from 'react';
import '../style/cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDolly } from '@fortawesome/free-solid-svg-icons'

export default class Cart extends Component{
  render(){

    const bikeUrl = 'https://images.pexels.com/photos/40904/bmw-k-1300-metallic-motorcycle-40904.jpeg';
    let assets =[{price : '1,20,000'}, {price : '1,60,000'}, {price : '1,10,000'}];
    let selectedAssets = assets.map( (asset, i) => 
      <div className="card cartCard" key={i}>
        <div className="row no-gutters">
          <div className="col-md-2">
            <img src={bikeUrl} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
          <div className="col-md-2 d-flex justify-content-between">
            <div>
              <div className="cartCardPrice">
                {asset.price} /-
              </div>
            </div>
            <div className='removeIcon' aria-hidden="true">&times;</div>
          </div>
        </div>
      </div>
    )

    return (
      <React.Fragment>
        <div className="alert alert-secondary" role="alert">
          <h5 className="text-center"><FontAwesomeIcon icon={faDolly}/> Cart is Empty </h5>
        </div>

        {selectedAssets}
      </React.Fragment>
    )
  }
}