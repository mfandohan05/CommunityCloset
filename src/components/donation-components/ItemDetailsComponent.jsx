import './ItemDetailsComponent.css';

function ItemDetailsComponent() {
    return (
        <fieldset className="item-details-fieldset">
            <legend>Item Details</legend>

            <label>Item Name</label>
            <input name="itemName" className="form-control" type="text" />

            <label>Item Condition</label>
            <select name="itemCondition" className="form-select">
                <option value="new">New</option>
                <option value="like-new">Like New</option>
                <option value="used-good">Used - Good</option>
                <option value="used-fair">Used - Fair</option>
            </select>

            <label>Item Quantity</label>
            <input name="itemQuantity" className="form-control" type="number" />

            <label>Item Size</label>
            <input name="itemSize" className="form-control" type="text" />

            <label>Item Color</label>
            <select name="itemColor" className="form-select">
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
        </fieldset>
    );
}

export default ItemDetailsComponent;