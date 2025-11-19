import './ItemComponent.css';
import { Link } from 'react-router-dom';

function ItemComponent() {
    return (
        <div className='card mb-3'>
            <img src="https://slpfitimsbybjuojrsga.supabase.co/storage/v1/object/public/Images%20for%20CommunityCloset/jeans.jpeg" className="card-img-top" alt="Sample Item" />
            <div className="card-body">
                <h5 className="card-title"><Link to="/item-detail">Sample Item Name</Link></h5>
                <p className="card-text">This is a brief description of the sample item.</p>
                <p className="item-price">$0.00 (Yes, really.)</p>
                <a href="#" className="btn btn-primary w-100 buy-now-button">Add to Cart</a>
            </div>
        </div>
    )
};

export default ItemComponent;
