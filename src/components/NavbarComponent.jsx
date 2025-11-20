import './NavbarComponent.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SlideoutNavigationComponent from './SlideoutNavigationComponent.jsx';
import { useCart } from '../context/CartContext.jsx';

function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useCart();

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <div>
            <SlideoutNavigationComponent isOpen={isMenuOpen} onClose={closeMenu} />

            <div className="navbar-container">
                <div className="left-navbar">
                    <div className="navbar-menu-button primary-button">
                        <a onClick={openMenu} href="#"><img src="/img/menu.svg" alt="menu button" className="menu-button" /></a>
                    </div>

                    <div className="site-name">
                        <Link className="text-decoration-none fw-semibold" to="/">CommunityCloset</Link>
                    </div>
                </div>

                <div className="right-navbar">
                    <div className="navbar-button">
                        <Link to="/shopping-cart">
                            <img src="/img/shopping-cart.svg" alt="Shopping cart icon" />
                            <span className="mobile-none navbar-button-text">
                                Shopping Cart ({cartCount})
                            </span>
                        </Link>
                    </div>

                    <div className="navbar-button">
                        <a href="#">
                            <img src="/img/account.svg" alt="account icon" />
                            <span className="mobile-none navbar-button-text">Welcome, User!</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarComponent;