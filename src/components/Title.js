import React, {Component} from 'react';

export default class Product extends Component{
  render(){
    return (
      <React.Fragment>
        <h2 className="text-center"> {this.props.name} <span>{this.props.heading}</span> </h2>
      </React.Fragment>
    )
  }
}