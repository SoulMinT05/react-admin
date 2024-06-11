import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <div className="logo">
                    <img src="logo.svg" alt="" />
                    <span>minhtam</span>
                </div>
            </Link>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <img src="/app.svg" alt="" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="/user-admin.jpeg" alt="" />
                    <span>Tam</span>
                </div>
                <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>
    );
}

export default Navbar;
