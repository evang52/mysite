import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark }from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import './Navbar.css';
import Button from './Button';

const bars = <FontAwesomeIcon icon={faBars} />
const xmark = <FontAwesomeIcon icon={faXmark}/>

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
                    Evan
                    <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon'
                    onClick={handleClick}>
                    <FontAwesomeIcon className='fa-bars' icon={
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
                    {/* <li className='nav-item'>
                        <Link to='/#' className='nav-links'
                            onClick={closeMobileMenu}>
                            Photography Portfolio
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/professional-career' className='nav-links'
                            onClick={closeMobileMenu}>
                            Software Engineering
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/writing' className='nav-links'
                            onClick={closeMobileMenu}>
                            Writing
                        </Link>
                    </li> */}

                </ul>
                {
                {/* button && <Button buttonStyle='btn--outline'>Contact</Button> */}
            } </div>
            <div></div>
        </nav>
    )
}

export default Navbar;
