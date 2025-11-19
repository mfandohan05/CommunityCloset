import './ShoppingCartComponent.css';
import ShoppingCartItem from './ShoppingCartItem';
import { Link } from 'react-router-dom';

function ShoppingCartComponent() {
    return (
        <div className="shopping-cart-container">
            <h1>Your Shopping Cart</h1>
            <Link to="/checkout" className='btn btn-primary w-100'>Go to checkout</Link>
            <p>Your shopping cart is currently empty.</p>
            <p>Subtotal (0 items) <strong>$0.00</strong></p>
            <ShoppingCartItem />
            <ShoppingCartItem />
        </div>
    );
};

export default ShoppingCartComponent;