import { useEffect, useState } from 'react';
import ItemComponent from './ItemComponent';
import './MainShopComponent.css';
import supabase from '../../supabaseClient';

function MainShopComponent() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [colorFilter, setColorFilter] = useState('');
    const [conditionFilter, setConditionFilter] = useState('');
    const [sizeFilter, setSizeFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            setError(null);

            const { data, error } = await supabase
                .from('items')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error(error);
                setError('Failed to load items.');
            } else {
                setItems(data || []);
            }

            setLoading(false);
        };

        fetchItems();
    }, []);

    const filteredItems = items.filter((item) => {
        if (colorFilter && item.item_color !== colorFilter) return false;
        if (conditionFilter && item.item_condition !== conditionFilter) return false;


        if (sizeFilter && item.item_size?.toLowerCase() !== sizeFilter.toLowerCase()) {
            return false;
        }

        if (
            searchTerm &&
            !item.item_name?.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            return false;
        }

        return true;
    });

    return (
        <div className="main-shop-container">
            <h1 className="text-center m-3">Shop All Items</h1>
            <h2 className="ms-4">Filters</h2>
            <div className="filter-options">
                <div className="dropdown-container">
                    <div>
                        <label htmlFor="color-filter" className="me-2">
                            Color
                        </label>
                        <select
                            id="color-filter"
                            className="me-4 form-select"
                            value={colorFilter}
                            onChange={(e) => setColorFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="other">Others</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="condition-filter" className="me-2">
                            Condition
                        </label>
                        <select
                            id="condition-filter"
                            className="form-select"
                            value={conditionFilter}
                            onChange={(e) => setConditionFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="new">New</option>
                            <option value="like-new">Like New</option>
                            <option value="used-good">Used - Good</option>
                            <option value="used-fair">Used - Fair</option>
                        </select>
                    </div>


                    <div>
                        <label htmlFor="size-filter" className="me-2">
                            Size
                        </label>
                        <select
                            id="size-filter"
                            className="form-select"
                            value={sizeFilter}
                            onChange={(e) => setSizeFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">XL</option>
                            <option value="2xl">2XL</option>
                            <option value="3xl">3XL</option>
                        </select>
                    </div>
                </div>

                <div className="border-bottom apply-container">
                    <button
                        type="button"
                        className="btn btn-primary w-100 my-3"
                        onClick={() => {
                            const itemsSection = document.querySelector('.items-container');
                            if (itemsSection) itemsSection.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Apply Filters & Search
                    </button>
                </div>
            </div>

            <div className="d-flex gap-2 pe-4 ps-4 pb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        const itemsSection = document.querySelector('.items-container');
                        if (itemsSection) itemsSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Search
                </button>
            </div>
            <div className="items-container">
                {loading && <p>Loading items...</p>}
                {error && <p className="text-danger">{error}</p>}

                {!loading && !error && filteredItems.length === 0 && (
                    <p>No items match your filters yet.</p>
                )}

                {!loading &&
                    !error &&
                    filteredItems.map((item) => (
                        <ItemComponent key={item.item_id} item={item} />
                    ))}
            </div>
        </div>
    );
}

export default MainShopComponent;