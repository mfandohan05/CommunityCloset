import './SlideoutNavigationComponent.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SlideoutNavigationComponent({ isOpen, onClose }) {

    return (
        <div className={isOpen ? 'slideout-menu active' : 'slideout-menu'}>
            <ul className='list-unstyled slideout-links'>
                <li><a onClick={onClose} className='slideout-link' href='#'><img className="close-button" src='/img/close-button.svg' alt='close button'></img></a></li>
                <li><Link to="/" onClick={onClose} className='slideout-link' href='#'>Home</Link></li>
                <li><Link to="/Donate" onClick={onClose} className='slideout-link' href='#'>Donate</Link></li>
                <li><Link to="/Shop" onClick={onClose} className='slideout-link' href='#'>Shop</Link></li>
            </ul>
        </div>
    );
}

export default SlideoutNavigationComponent;