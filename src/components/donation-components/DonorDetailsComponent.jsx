import './DonorDetailsComponent.css';

function DonorDetailsComponent() {
    return (
        <div>
            <fieldset className='donor-details-fieldset'>
                <legend>Donor Details</legend>
                <div className="mb-3">
                    <label htmlFor="donorName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="donorName" placeholder="Enter your full name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="donorEmail" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="donorEmail" placeholder="Enter your email address" />
                </div>
            </fieldset>
        </div>
    );
};

export default DonorDetailsComponent;