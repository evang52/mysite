import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom';
import './Navbar.css';
import Button from './Button';

const bars = <FontAwesomeIcon icon="fa-solid fa-xmark" />
const times = <FontAwesomeIcon icon="fa-solid fa-bars"/>

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Evan's Website
                    <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon'
                    onClick={handleClick}>
                    <FontAwesomeIcon icon={
                        click ? xmark : bars
                     }/>
                </div>
                <ul className={
                    click ? 'nav-menu active' : 'nav-menu'
                }>
                    <li className='nav-item'>
                        <Link to='/#' className='nav-links'
                            onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links'
                            onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blog' className='nav-links'
                            onClick={closeMobileMenu}>
                            Blog
                        </Link>
                    </li>

                </ul>
                {
                button && <Button buttonStyle='btn--outline'>Sign Up</Button>
            } </div>
            <div></div>
        </nav>
    )
}

export default Navbar;
