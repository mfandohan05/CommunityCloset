import "./SuccessfulDonationComponent.css";
import { Link, useLocation } from "react-router-dom";

function SuccessfulDonationComponent() {
    const { state } = useLocation();

    const donationId = state?.donationId || "Pending…";
    const itemName = state?.itemName || "Unknown Item";
    const previewImage =
        state?.previewImage ||
        "https://placehold.co/400x300?text=No+Image";

    return (
        <div className="successful-donation-container">
            <div>
                <h1>Donation Successful!</h1>
                <p>
                    Thank you for donating to Community Closet! Your impending
                    donation was successfully recorded! Please make sure to
                    drop off your donation at one of our partner locations!
                </p>
                <p>
                    Donation ID: <strong>{donationId}</strong>
                </p>
                <p>
                    Item Name: <strong>{itemName}</strong>
                </p>
            </div>

            <div className="successful-donation-sub-container">
                <img src={previewImage} alt="Uploaded donation preview" />

                <Link to="/Donate" className="text-white text-decoration-none">
                    <button className="btn btn-primary mt-3">
                        Donate More!
                    </button>
                </Link>

                <Link to="/Shop" className="text-white text-decoration-none">
                    <button className="btn btn-primary mt-3">
                        Shop
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default SuccessfulDonationComponent;