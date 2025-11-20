import './DonorDetailsComponent.css';

function DonorDetailsComponent() {
    return (
        <fieldset className="donor-details-container">
            <legend>Donor Details</legend>

            <label htmlFor="donorName" className="form-label">Full Name</label>
            <input
                name="donorName"
                type="text"
                className="form-control"
                placeholder="Enter your full name"
            />

            <label htmlFor="donorEmail" className="form-label">Email Address</label>
            <input
                name="donorEmail"
                type="email"
                className="form-control"
                placeholder="Enter your email address"
            />
        </fieldset>
    );
}

export default DonorDetailsComponent;