import './ItemDetailComponent.css';


function ItemDetailComponent() {
    return (
        <div className='item-detail-container'>
            <img alt="" className="w-100" src='https://slpfitimsbybjuojrsga.supabase.co/storage/v1/object/public/Images%20for%20CommunityCloset/jeans.jpeg'></img>
            <h1 className=''>Sample Item</h1>
            <p>Free pickup available at Goodwill nearby!</p>
            <p><strong>Condition: </strong> New</p>
            <div className='quantity-container'>
                <div>
                    <label htmlFor="quantity"><strong>Quantity: </strong></label>
                    <input type="number" min="1" max="10" defaultValue="1"></input>
                </div>
                <div>
                    <label><strong>1</strong> available</label>
                </div>

            </div>
            <button className='btn btn-primary buy-now-button w-100'>Get it now!</button>
            <button className='btn btn-primary buy-now-button w-100'>Add to cart</button>
            <h2>About this item</h2>
            <fieldset className='item-details-fieldset mb-0 w-100'>
                <legend>Item Details</legend>
                <p><strong>Size: </strong> Medium</p>
                <p><strong>Color: </strong> Blue</p>
                <p><strong>Brand: </strong> Levi's</p>
            </fieldset>
            <fieldset className='item-details-fieldset mb-0 w-100'>
                <legend>Item Description</legend>
                <p>This is a sample description.</p>
            </fieldset>
        </div>
    )
};

export default ItemDetailComponent;