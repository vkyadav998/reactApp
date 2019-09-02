import React from 'react';
import Productlist from './Productlist';
import Title from './Title';

export default class Product extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Title name="Product" heading="Store"/>
        <Productlist />
      </React.Fragment>
    )
  }
}