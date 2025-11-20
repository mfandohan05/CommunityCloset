import './RecentlyDonatedComponent.css';
import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

function RecentlyDonatedComponent() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchRecentItems = async () => {
            const { data, error } = await supabase
                .from('items')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(4);

            if (!error && data) {
                setItems(data);
            }
        };

        fetchRecentItems();
    }, []);

    if (!items.length) {
        return null;
    }

    return (
        <div className="mt-3 recently-donated-container mb-3">
            <h2 className="fw-bold text-center text-color">Recently Donated Items</h2>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators d-none">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? 'active' : ''}
                            aria-current={index === 0 ? 'true' : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                <div className="carousel-inner image-border">
                    {items.map((item, index) => {
                        const imgSrc =
                            item.image_url_1 ||
                            item.image_url_2 ||
                            item.image_url_3 ||
                            'https://placehold.co/600x400?text=No+Image';

                        return (
                            <div
                                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                key={item.item_id}
                            >
                                <img
                                    src={imgSrc}
                                    className="d-block w-100 image-border"
                                    alt={item.item_name}
                                />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{item.item_name}</h5>
                                    <p>{item.item_description || 'No description provided.'}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default RecentlyDonatedComponent;