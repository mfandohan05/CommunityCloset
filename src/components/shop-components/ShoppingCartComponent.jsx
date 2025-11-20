import './ShoppingCartComponent.css';
import ShoppingCartItem from './ShoppingCartItem';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function ShoppingCartComponent() {
    const { cart, clearCart } = useCart();

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.quantity * 0, 0);

    const isEmpty = cart.length === 0;

    return (
        <div className="shopping-cart-container">
            <h1>Your Shopping Cart</h1>

            <div className="cart-grid">
                <div className="cart-items-column">
                    <p className="cart-subheader">Your Items</p>

                    {isEmpty ? (
                        <p className="cart-empty-msg">Your shopping cart is currently empty.</p>
                    ) : (
                        cart.map((item) => (
                            <ShoppingCartItem key={item.item_id} item={item} />
                        ))
                    )}
                </div>

                <div className="cart-summary-column">
                    <div className="cart-summary-card">
                        <p className="summary-line">
                            Subtotal ({totalItems} items)
                            <strong>${subtotal.toFixed(2)}</strong>
                        </p>

                        {isEmpty ? (
                            <button 
                                className="btn btn-primary w-100 checkout-btn disabled" 
                                disabled
                            >
                                Go to checkout
                            </button>
                        ) : (
                            <Link to="/checkout" className="btn btn-primary w-100 checkout-btn">
                                Go to checkout
                            </Link>
                        )}

                        {!isEmpty && (
                            <button
                                className="btn btn-outline-danger w-100 mt-2"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCartComponent;