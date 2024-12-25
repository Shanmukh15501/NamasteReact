

import {IMAGE_URL} from './utils/constants'
const Header = () => {
    return (
        <div className="header">
            <div className="logobro">
                <img src={IMAGE_URL} alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;