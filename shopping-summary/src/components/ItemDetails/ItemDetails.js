import React, { Component } from 'react';





export default class ItemDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
       
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details{' '}
          {this.state.open === false ? `+` : `-`}
        
         in={this.state.open}>
          <div>
          
           
              
                  <img
                    width={100}
                    height={100}
                    src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                    alt="thumbnail"
                  />
            
               
                  <p>
                    Essentials by OFM ESS-3085 Racing Style Leather Gaming
                    Chair, Red
                  </p>
                 
                  
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${
                        this.props.price
                      }`}</strong>
                    
                  
                      <strong>Qty: 1</strong>
           
          </div>
        
      </div>
    );
  }
}