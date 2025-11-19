import './ShoppingCartItem.css'

function ShoppingCartItem() {
    return (
        <div className='shopping-cart-item-container'>
            <img alt="" className="shopping-cart-item-image" src='https://slpfitimsbybjuojrsga.supabase.co/storage/v1/object/public/Images%20for%20CommunityCloset/jeans.jpeg'></img>
            <div className='shopping-cart-item-details'>
                <h2 className='shopping-cart-item-title'>Sample Item</h2>
                <p className='shopping-cart-item-description'>This is a sample description.</p>
                <p><strong>Price: </strong>$0.00</p>
                <a href='#' className='btn btn-primary disabled'>Remove</a>
            </div>
        </div>
    )
};

export default ShoppingCartItem;