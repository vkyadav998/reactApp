import React, {Component} from 'react';
import '../style/title.css'

export default class Product extends Component{
  render(){
    return (
      <React.Fragment>
        <h2 className="text-center title"> {this.props.name} <span className="heading">{this.props.heading}</span> </h2>
      </React.Fragment>
    )
  }
}