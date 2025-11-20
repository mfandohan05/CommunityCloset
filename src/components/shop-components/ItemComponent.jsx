import './ItemComponent.css';
import { Link } from 'react-router-dom';

function ItemComponent({ item }) {
    const imageSrc =
        item.image_url_1 ||
        item.image_url_2 ||
        item.image_url_3 ||
        item.image_url_4 ||
        item.image_url_5 ||
        "https://placehold.co/400x300?text=No+Image";

    return (
        <div className='card mb-3'>
            <img 
                src={imageSrc} 
                className="card-img-top" 
                alt={item.item_name} 
            />

            <div className="card-body">
                <h5 className="card-title">
                    <Link to={`/item-detail/${item.item_id}`}>
                        {item.item_name}
                    </Link>
                </h5>

                <p className="card-text">
                    {item.item_brand ? `${item.item_brand}` : "No description available"}
                </p>

                <p className="item-price">
                    $0.00 (Yes, really.)
                </p>

                <Link to={`/item-detail/${item.item_id}`} className="btn btn-primary w-100 buy-now-button">
                    See More
                </Link>
            </div>
        </div>
    );
};

export default ItemComponent;