import './SuccessfulCheckoutComponent.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';

function SuccessfulCheckoutComponent() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <div className="successful-checkout-container">
            <div className="successful-checkout-text">
                <h1>Order Confirmed!</h1>
                <p>
                    Your pickup order has been placed with CommunityCloset.
                    We’re getting everything ready for you.
                </p>
                <p>
                    You’ll receive pickup details at the location and time you provided.
                </p>
            </div>

            <div className="successful-checkout-actions">
                <Link to="/shop" className="text-white text-decoration-none">
                    <button className="btn btn-primary w-100 mb-2">
                        Continue browsing
                    </button>
                </Link>

                <Link to="/" className="text-white text-decoration-none">
                    <button className="btn btn-outline-secondary w-100">
                        Back to home
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SuccessfulCheckoutComponent;