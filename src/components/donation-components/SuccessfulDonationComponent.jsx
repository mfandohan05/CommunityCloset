import "./SuccessfulDonationComponent.css";
import { Link } from "react-router-dom";

function SuccessfulDonationComponent() {
    return(
        <div className="successful-donation-container">
            <h1>Donation Successful!</h1>
            <h2>Thank you for donating to Community Closet! Your impending donation was successfully recorded! Please make sure to drop off your donation at one of our partner locations!</h2>
            <p>Donation ID: Placeholder</p>
            <p>Item Name: Placeholder</p>
            <img src="https://slpfitimsbybjuojrsga.supabase.co/storage/v1/object/public/Images%20for%20CommunityCloset/jeans.jpeg" alt=""></img>
            <button className="btn btn-primary mt-3">
                <Link to="/Donate" className="text-white text-decoration-none">
                    Donate More!
                </Link>
            </button>
            <button className="btn btn-primary mt-3">
                <Link to="/Shop" className="text-white text-decoration-none">
                    Shop
                </Link>
            </button>
        </div>
    );
};

export default SuccessfulDonationComponent;