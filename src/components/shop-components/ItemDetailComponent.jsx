import './ItemDetailComponent.css';

function ItemDetailComponent() {
  return (
    <div className="item-detail-container">
      <div className="item-media">
        <img
          alt=""
          className="item-image"
          src="https://slpfitimsbybjuojrsga.supabase.co/storage/v1/object/public/Images%20for%20CommunityCloset/jeans.jpeg"
        />
      </div>

      <div className="item-info">
        <h1>Sample Item</h1>
        <p>Free pickup available at Goodwill nearby!</p>
        <p>
          <strong>Condition: </strong> New
        </p>

        <div className="quantity-container">
          <div>
            <label htmlFor="quantity">
              <strong>Quantity: </strong>
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              max="5"
              defaultValue="1"
            />
          </div>
          <div>
            <label>
              <strong>1</strong> available
            </label>
          </div>
        </div>

        <button className="btn btn-primary buy-now-button w-100">
          Get it now!
        </button>
        <button className="btn btn-primary buy-now-button w-100">
          Add to cart
        </button>

        <h2 className='mt-3'>About this item</h2>

        <fieldset className="item-details-fieldset w-100">
          <legend>Item Details</legend>
          <p>
            <strong>Size: </strong> Medium
          </p>
          <p>
            <strong>Color: </strong> Blue
          </p>
          <p>
            <strong>Brand: </strong> Levi's
          </p>
        </fieldset>

        <fieldset className="item-details-fieldset w-100">
          <legend>Item Description</legend>
          <p>This is a sample description.</p>
        </fieldset>
      </div>
    </div>
  );
}

export default ItemDetailComponent;