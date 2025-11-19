import "./SuccessfulDonationComponent.css";
import { Link } from "react-router-dom";

function SuccessfulDonationComponent() {
    return (
        <div className="successful-donation-container">
            <div>
                <h1>Donation Successful!</h1>
                <p>Thank you for donating to Community Closet! Your impending donation was successfully recorded! Please make sure to drop off your donation at one of our partner locations!</p>
                <p>Donation ID: <strong>Placeholder</strong></p>
                <p>Item Name: <strong>Placeholder</strong></p>
            </div>
            <div className="successful-donation-sub-container">
                <img src="https://slpfitimsbybjuojrsga.supabase.co/storage/v1/object/public/Images%20for%20CommunityCloset/jeans.jpeg" alt=""></img>
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
};

export default SuccessfulDonationComponent;