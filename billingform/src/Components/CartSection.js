import Button from "./Button";
import Styles from './Button.module.css';

const CartSection = () => {
  return (
    <div class="row">
            <div class="col-md-9 order-md-2 mb-4">
              <h5 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted1">&nbsp;&nbsp;Your cart</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h5>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Product name</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$12</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Second product</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Third item</h6>
                    <small class="text-muted">Brief description</small>
                  </div>
                  <span class="text-muted">$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span class="text-success">-$5</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
        
              <form class="card p-2">
                <div class="input-group">
                  <input type="text" className="form-control" placeholder="Promo code"/>
                  <div className="input-group-append">
                    <Button title="Redeem"/>
                    {/* <button type="submit" class="btn btn-primary">Redeem</button> */}
                  </div>
                </div>
              </form>
            </div>
    {/* // <div className="col-md-12 order-md-2 mb-4">
    //   <h4 className="d-flex justify-content-between align-items-center mb-3">
    //     <span className="text-muted">Your cart</span>
    //     {/* <span className="badge badge-secondary badge-pill">3</span> 
    //   </h4>
    //   <ul className="list-group mb-3">
    //     {/* Cart items 
    //   </ul>
    //   <form className="card p-2">
    //     <div className="input-group">
          
    //       <input type="text" className="form-control" placeholder="Promo code" />
    //       <div className="input-group-append">
    //         <Button title="Redeem"/>
    //         {/* <button type="submit" className="btn btn-secondary">
    //           Redeem
    //         </button> 
    //       </div>
    //     </div>
    //   </form>*/}
     </div>
  );
};

export default CartSection;