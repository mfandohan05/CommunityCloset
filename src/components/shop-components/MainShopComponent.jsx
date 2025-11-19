import ItemComponent from './ItemComponent';
import './MainShopComponent.css';
import { Link } from 'react-router-dom';

function MainShopComponent() {
    return (
        <div className='main-shop-container'>
            <h1 className='text-center m-3'>Shop All Items</h1>
            <h2 className='ms-4'>Filters</h2>
            <div className='filter-options'>
                <div className='dropdown-container'>
                    <div>
                        <label htmlFor='color-filter' className='me-2'>Color</label>
                        <select id='color-filter' className='me-4 form-select'>
                            <option value='red'>Red</option>
                            <option value='blue'>Blue</option>
                            <option value='green'>Green</option>
                            <option value='yellow'>Yellow</option>
                            <option value='black'>Black</option>
                            <option value='white'>White</option>
                            <option value='other'>Others</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='condition-filter' className='me-2'>Condition</label>
                        <select id='condition-filter' className='form-select'>
                            <option value='new'>New</option>
                            <option value='like-new'>Like New</option>
                            <option value='used-good'>Used - Good</option>
                            <option value='used-fair'>Used - Fair</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='size-filter' className='me-2'>Size</label>
                        <select id='size-filter' className='form-select'>
                            <option value='s'>Small</option>
                            <option value='m'>Medium</option>
                            <option value='l'>Large</option>
                            <option value='xl'>XL</option>
                            <option value='2xl'>2XL</option>
                            <option value='3xl'>3XL</option>
                        </select>
                    </div>
                </div>
                <div className='border-bottom apply-container'>
                    <button className='btn btn-primary w-100 my-3'>Apply Filters & Search</button>
                </div>


            </div>
            <div className='d-flex gap-2 pe-4 ps-4 pb-4'>
                <input type='text' className='form-control' placeholder='Search for items...'></input>
                <button className='btn btn-primary'>Search</button>
            </div>
            <div className='items-container'>
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
                <ItemComponent />
            </div>

        </div>

    );
};

export default MainShopComponent;