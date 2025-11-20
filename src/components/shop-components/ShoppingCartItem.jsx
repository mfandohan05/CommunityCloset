import './ShoppingCartItem.css';

function ShoppingCartItem({ item }) {
    return (
        <div className="shopping-cart-item-container">
            <img
                src={item?.image_url_1}
                alt={item?.item_name}
                className="shopping-cart-item-image"
            />

            <div className="shopping-cart-item-details">
                <h5>{item?.item_name}</h5>
                <p>Condition: {item?.item_condition}</p>
                <p>Quantity: {item?.quantity}</p>
                <p>Size: {item?.item_size}</p>
            </div>
        </div>
    );
}

export default ShoppingCartItem;