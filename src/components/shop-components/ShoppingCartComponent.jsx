import './ShoppingCartComponent.css';
import ShoppingCartItem from './ShoppingCartItem';
import { Link } from 'react-router-dom';

function ShoppingCartComponent() {
    return (
        <div className="shopping-cart-container">
            <h1>Your Shopping Cart</h1>
            <div className="cart-grid">
                <div className="cart-items-column">
                    <p className="cart-subheader">Your Items</p>
                    <p className="cart-empty-msg">Your shopping cart is currently empty.</p>
                    <ShoppingCartItem />
                    <ShoppingCartItem />
                </div>
                <div className="cart-summary-column">
                    <div className="cart-summary-card">
                        <p className="summary-line">
                            Subtotal (0 items)
                            <strong>$0.00</strong>
                        </p>
                        <Link to="/checkout" className="btn btn-primary w-100 checkout-btn">
                            Go to checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCartComponent;