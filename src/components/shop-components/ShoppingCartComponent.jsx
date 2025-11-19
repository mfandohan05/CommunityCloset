import './ShoppingCartComponent.css';

function ShoppingCartComponent() {
    return (
        <div className="shopping-cart-container">
            <h1>Your Shopping Cart</h1>
            <button className='btn btn-primary w-100 disabled'>Go to checkout</button>
            <p>Your shopping cart is currently empty.</p>
            <p>Subtotal (0 items) <strong>$0.00</strong></p>
        </div>
    );
};

export default ShoppingCartComponent;