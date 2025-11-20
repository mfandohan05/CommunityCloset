import './ItemDetailsComponent.css';

function ItemDetailsComponent() {
    return (
        <fieldset className="item-details-fieldset">
            <legend>Item Details</legend>

            <label>Item Name</label>
            <input name="itemName" className="form-control" type="text" />

            <label>Item Condition</label>
            <select required name="itemCondition" className="form-select">
                <option value="new">New</option>
                <option value="like-new">Like New</option>
                <option value="used-good">Used - Good</option>
                <option value="used-fair">Used - Fair</option>
            </select>

            <label>Item Quantity</label>
            <input required name="itemQuantity" className="form-control" type="number" />

            <label>Item Size</label>
            <select required name="itemSize" className="form-select">
                <option value="s">Small</option>
                <option value="m">Medium</option>
                <option value="l">Large</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
                <option value="3xl">3XL</option>
            </select>

            <label>Item Color</label>
            <select required name="itemColor" className="form-select">
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="other">Other</option>
            </select>

            <label>Item Brand</label>
            <input name="itemBrand" className="form-control" type="text" />
            <label>Item Description</label>
            <textarea name="itemDescription" className='form-control'></textarea>
        </fieldset>
    );
}

export default ItemDetailsComponent;