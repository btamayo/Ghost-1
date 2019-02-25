import React, {Component} from 'react';
import {CardElement} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = {
      base: {
        '::placeholder': {
          color: '#aab7c4'
        }
      }
    };
    return (
      <div className="gm-form-element">
        <CardElement style={style} />
      </div>
    );
  }
}

export default CheckoutForm;
