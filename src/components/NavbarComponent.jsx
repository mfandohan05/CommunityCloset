import './NavbarComponent.css';
import { useState, useEffect } from 'react';
import SlideoutNavigationComponent from './SlideoutNavigationComponent.jsx';

function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);
    return (
        <div>
            <SlideoutNavigationComponent isOpen={isMenuOpen} onClose={closeMenu} />
            <div className='navbar-container'>
                <div className='left-navbar'>
                    <div className='navbar-menu-button primary-button'><a onClick={openMenu} href="#"><img src="/img/menu.svg" alt="menu button" className='menu-button'></img></a></div>
                    <div className='site-name'><a className='text-decoration-none fw-semibold' href='#'>CommunityCloset</a></div>
                </div>
                <div className='right-navbar'>
                    <div className='navbar-button'><a href="#"><img src='img/shopping-cart.svg' alt='Shopping cart icon'></img><span className="mobile-none navbar-button-text">Shopping Cart</span></a></div>
                    <div className='navbar-button'><a href='#'><img src='img/account.svg' alt='account icon'></img><span className="mobile-none navbar-button-text">Welcome, User!</span></a></div>
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;
