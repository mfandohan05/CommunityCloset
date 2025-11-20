import './ItemDetailComponent.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../../supabaseClient';
import { useCart } from '../../context/CartContext';

function ItemDetailComponent() {
  const { addToCart } = useCart();
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('items')
        .select('*')
        .eq('item_id', itemId)
        .single();

      if (error) {
        console.error('Error fetching item:', error);
        setError('Failed to load item.');
      } else {
        setItem(data);
      }

      setLoading(false);
    };

    if (itemId) {
      fetchItem();
    }
  }, [itemId]);

  if (loading) {
    return <div className="item-detail-container">Loading item…</div>;
  }

  if (error || !item) {
    return <div className="item-detail-container">Item not found.</div>;
  }

  const mainImage =
    item.image_url_1 ||
    item.image_url_2 ||
    item.image_url_3 ||
    item.image_url_4 ||
    item.image_url_5 ||
    'https://placehold.co/400x300?text=No+Image';

  const availableQty = item.item_quantity || 1;

  return (
    <div className="item-detail-container">
      <div className="item-media">
        <img
          alt={item.item_name}
          className="item-image"
          src={mainImage}
        />
      </div>

      <div className="item-info">
        <h1>{item.item_name}</h1>
        <p>Free pickup available at Goodwill nearby!</p>

        <p>
          <strong>Condition: </strong> {item.item_condition || 'Not specified'}
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
              max={availableQty}
              defaultValue={availableQty > 0 ? 1 : 0}
            />
          </div>
          <div>
            <label>
              <strong>{availableQty}</strong> available
            </label>
          </div>
        </div>

        <button className="btn btn-primary buy-now-button w-100">
          Get it now!
        </button>
        <button
          className="btn btn-primary buy-now-button w-100"
          onClick={() => addToCart(item)}
        >
          Add to cart
        </button>

        <h2 className="mt-3">About this item</h2>

        <fieldset className="item-details-fieldset w-100">
          <legend>Item Details</legend>
          <p>
            <strong>Size: </strong> {item.item_size || 'Not specified'}
          </p>
          <p>
            <strong>Color: </strong> {item.item_color || 'Not specified'}
          </p>
          <p>
            <strong>Brand: </strong> {item.item_brand || 'Unknown'}
          </p>
        </fieldset>

        <fieldset className="item-details-fieldset w-100 my-3">
          <legend>Item Description</legend>
          <p>
            {item.item_description || 'No description provided.'}
          </p>
        </fieldset>
      </div>
    </div>
  );
}

export default ItemDetailComponent;