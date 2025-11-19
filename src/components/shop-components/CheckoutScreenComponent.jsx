import './CheckoutScreenComponent.css';

function CheckoutScreenComponent() {
    return (
        <div>
            <main className="checkout-page">
                <div className="checkout-container">
                    <h1 className="checkout-title">Checkout</h1>
                    <section className="checkout-card pickup-card">
                        <header className="checkout-card-header">
                            <h2>Pickup Information</h2>
                        </header>
                        <div className="pickup-form">
                            <label for="pickupName">Full Name</label>
                            <input id="pickupName" type="text" placeholder="Enter your name" />

                            <label for="pickupEmail">Email Address</label>
                            <input id="pickupEmail" type="email" placeholder="you@example.com" />

                            <label for="pickupPhone">Phone Number</label>
                            <input id="pickupPhone" type="tel" placeholder="(555) 555-5555" />

                            <label for="pickupLocation">Pickup Location</label>
                            <input
                                id="pickupLocation"
                                type="text"
                                placeholder="CommunityCloset Center"
                            />
                        </div>

                        {/* <div className="pickup-summary">
                            <div className="pickup-summary-row">
                                <span className="summary-label">Name</span>
                                <span className="summary-value">Jordan Smith</span>
                            </div>
                            <div className="pickup-summary-row">
                                <span className="summary-label">Email</span>
                                <span className="summary-value">jordan@example.com</span>
                            </div>
                            <div className="pickup-summary-row">
                                <span className="summary-label">Phone</span>
                                <span className="summary-value">(555) 555-5555</span>
                            </div>
                            <div className="pickup-summary-row">
                                <span className="summary-label">Pickup Location</span>
                                <span className="summary-value">Downtown CommunityCloset</span>
                            </div>

                            <button className="btn-link edit-btn" type="button">Edit</button>
                        </div> */}

                        <button className="btn-primary full-width-btn" type="button">
                            Confirm pickup info
                        </button>
                    </section>

                    <section className="checkout-card review-card">
                        <header className="checkout-card-header">
                            <h2>Review Your Order</h2>
                        </header>

                        <div className="order-items">

                            <div className="order-item">
                                <div className="order-item-thumbnail"></div>
                                <div className="order-item-info">
                                    <p className="order-item-name">Warm Winter Coat</p>
                                    <p className="order-item-meta">Quantity: 1 · Size: L</p>
                                    <p className="order-item-location">Pickup: Downtown Center</p>
                                </div>
                            </div>

                        </div>

                        <div className="order-summary">
                            <div className="summary-row">
                                <span>Items (2)</span>
                                <span>$0.00</span>
                            </div>
                            <div className="summary-row">
                                <span>Pickup</span>
                                <span>Free</span>
                            </div>
                            <div className="summary-row summary-row-total">
                                <span>Total</span>
                                <span>$0.00</span>
                            </div>
                        </div>

                        <button className="btn-primary full-width-btn place-order-btn" type="button">
                            Place order
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default CheckoutScreenComponent;