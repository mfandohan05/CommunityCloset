import DonorDetailsComponent from './DonorDetailsComponent';
import ItemDetailsComponent from './ItemDetailsComponent';
import './MainDonationComponent.css';
import UploadPicturesComponent from './UploadPicturesComponent';

function MainDonationComponent() {
    return (
        <div className='main-donation-component'>
            <div>
                <h1 className='text-center m-3'>Donate an Item!</h1>
                <p className='text-center'>Your generosity keeps our community moving! Fill out the form below to donate an item.</p>
            </div>
            <form>
                <ItemDetailsComponent />
                <UploadPicturesComponent />
                <DonorDetailsComponent />
                <div className='text-center mt-4 mb-4'>
                    <button type="submit" className="btn btn-primary submit-donation-button w-100">Submit Donation</button>
                </div>
            </form>
            
        </div>
    );
};

export default MainDonationComponent;