import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; // Make sure to create an appropriate CSS file
import BillingAddress from './Components/BillingAddress';
import PaymentSection from './Components/PaymentSection';
import CartSection from './Components/CartSection';
import Gallery from './Resultb';
class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8">
          <div className="container">
          
          
            <form action="">
            
              <BillingAddress />
              
              {/* ... Other form elements ... */}
              <PaymentSection />
            </form>
            
            </div>
        </div>
        <div className="col-lg-4">
        <CartSection />
        <Gallery/>
        </div>
      </div>
      
    );
  }
}

export default App;