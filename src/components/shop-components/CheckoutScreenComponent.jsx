import './CheckoutScreenComponent.css';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CheckoutScreenComponent() {
  const { cart } = useCart();
  const [isPickupLocked, setIsPickupLocked] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.quantity * 0, 0);

  const handlePickupToggle = () => {
    setIsPickupLocked((prev) => !prev);
  };

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-grid">
          <section className="checkout-card pickup-card">
            <header className="checkout-card-header">
              <h2>Pickup Information</h2>
            </header>

            <div className="pickup-form">
              <label htmlFor="pickupName">Full Name</label>
              <input
                id="pickupName"
                type="text"
                placeholder="Enter your name"
                disabled={isPickupLocked}
              />

              <label htmlFor="pickupEmail">Email Address</label>
              <input
                id="pickupEmail"
                type="email"
                placeholder="you@example.com"
                disabled={isPickupLocked}
              />

              <label htmlFor="pickupPhone">Phone Number</label>
              <input
                id="pickupPhone"
                type="tel"
                placeholder="(555) 555-5555"
                disabled={isPickupLocked}
              />
            </div>

            <button
              className="btn-primary full-width-btn"
              type="button"
              onClick={handlePickupToggle}
            >
              {isPickupLocked ? 'Edit pickup info' : 'Confirm pickup info'}
            </button>
          </section>

          <section className="checkout-card review-card">
            <header className="checkout-card-header">
              <h2>Review Your Order</h2>
            </header>

            <div className="order-items">
              {cart.length === 0 && <p>Your cart is currently empty.</p>}

              {cart.map((item) => {
                const thumb =
                  item.image_url_1 ||
                  item.image_url_2 ||
                  item.image_url_3 ||
                  'https://placehold.co/48x48';

                return (
                  <div className="order-item" key={item.item_id}>
                    <div className="order-item-thumbnail">
                      <img
                        src={thumb}
                        alt={item.item_name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '12px',
                        }}
                      />
                    </div>
                    <div className="order-item-info">
                      <p className="order-item-name">{item.item_name}</p>
                      <p className="order-item-meta">
                        Quantity: {item.quantity}
                        {item.item_size && ` · Size: ${item.item_size}`}
                      </p>
                      <p className="order-item-location">
                        Pickup: CommunityCloset Center
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="order-summary">
              <div className="summary-row">
                <span>Items ({totalItems})</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Pickup</span>
                <span>Free</span>
              </div>
              <div className="summary-row summary-row-total">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <Link to="/successful-checkout" className="btn-primary full-width-btn place-order-btn">
              Place order
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}

export default CheckoutScreenComponent;