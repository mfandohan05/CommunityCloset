import './ItemDetailsComponent.css';

function ItemDetailsComponent() {
    return (
        <div>
            <fieldset className='item-details-fieldset'>
                <legend>Item Details</legend>
                <label>Item Name</label>
                <input className='form-control' type='text'></input>
                <label>Item Condition</label>
                <select className='form-select'>
                    <option value="new">New</option>
                    <option value="like-new">Like New</option>
                    <option value="used-good">Used - Good</option>
                    <option value="used-fair">Used - Fair</option>
                </select>
                <label>Item Quantity</label>
                <input className='form-control' type='number'></input>
                <label>Item Size</label>
                <input className='form-control' type='text'></input>
                <label>Item Color</label>
                <select className='form-select'>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="other">Other</option>
                </select>
                <label>Item Brand</label>
                <input className='form-control' type='text'></input>
            </fieldset>
        </div>
    );
};

export default ItemDetailsComponent;