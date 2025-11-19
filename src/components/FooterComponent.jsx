import './FooterComponent.css';
import { Link } from 'react-router-dom';

function FooterComponent() {
    return (
        <footer className='footer-container'>
            <div>
                <ul>
                    <li><Link className='' to='/'>Home</Link></li>
                    <li><Link className='' to='/Donate'>Donate</Link></li>
                    <li><Link className='' to='/Shop'>Shop</Link></li>
                </ul>
            </div>
            <div className='p-3 text-center text-color'>
                <p>© 2025 Community Closet. All rights reserved.</p>
            </div>
        </footer>

    );
};

export default FooterComponent;