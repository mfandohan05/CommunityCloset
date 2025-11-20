import './WhyCCComponent.css';

function WhyCCComponent() {
    return (
        <div className='why-cc-container mt-3 text-center text-color'>
            <h2 className="fw-bold">Why Community Closet?</h2>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner image-border">
                    <div className="carousel-item active">
                        <img src="https://slpfitimsbybjuojrsga.supabase.co/storage/v1/object/public/Images%20for%20CommunityCloset/assets/short-value-1.jpg" className="d-block w-100 image-border" alt="..." />
                        <p className='mt-2'>Because sharing strengthens communities.</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://slpfitimsbybjuojrsga.supabase.co/storage/v1/object/public/Images%20for%20CommunityCloset/assets/short-value-2.jpg" className="d-block w-100 image-border" alt="..." />
                        <p className='mt-2'>Because someone else needs what you're not using.</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://slpfitimsbybjuojrsga.supabase.co/storage/v1/object/public/Images%20for%20CommunityCloset/assets/short-value-3.jpg" className="d-block w-100 image-border" alt="..." />
                        <p className='mt-2'>Because essentials should be accessible to everyone.</p>
                    </div>
                    <div className="carousel-item">
                        <img src="https://slpfitimsbybjuojrsga.supabase.co/storage/v1/object/public/Images%20for%20CommunityCloset/assets/short-value-4.jpg" className="d-block w-100 image-border" alt="..." />
                        <p className='mt-2'>Because giving back should be simple, and easy as pie.</p>
                    </div>
                </div>
                <button className="carousel-control-prev slide-button" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next slide-button" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default WhyCCComponent;