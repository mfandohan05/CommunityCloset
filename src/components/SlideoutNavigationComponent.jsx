import './SlideoutNavigationComponent.css';
import { Link } from 'react-router-dom';

function SlideoutNavigationComponent({ isOpen, onClose }) {

    return (
        <>
            <div
                className={isOpen ? "slideout-overlay active" : "slideout-overlay"}
                onClick={onClose}
            ></div>

            <div className={isOpen ? 'slideout-menu active' : 'slideout-menu'}>
                <ul className='list-unstyled slideout-links'>
                    <li>
                        <button onClick={onClose} className='close-btn'>
                            <img className="close-button" src='/img/close-button.svg' alt='close button' />
                        </button>
                    </li>
                    <li><Link to="/" onClick={onClose} className='slideout-link'>Home</Link></li>
                    <li><Link to="/Donate" onClick={onClose} className='slideout-link'>Donate</Link></li>
                    <li><Link to="/Shop" onClick={onClose} className='slideout-link'>Shop</Link></li>
                </ul>
            </div>
        </>
    );
}

export default SlideoutNavigationComponent;