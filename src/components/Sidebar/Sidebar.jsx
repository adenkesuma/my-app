import React from 'react';
import { useState } from 'react';
import LogoA from '../../assets/NameLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faUser,
    faEnvelope,
    faBars,
    faClose,
    faFolderOpen
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link
                className='Logo'
                to="/"
                onClick={() => setShowNav(false)}>
                <img className='sub-logo' src={LogoA} alt="Aden"/>
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <div>
                    <NavLink
                        to="/"
                        activeclassname="active"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faHome} color="#ffb904"></FontAwesomeIcon>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="about-link"
                        activeclassname="active"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faUser} color="#ffb904"></FontAwesomeIcon>
                    </NavLink>
                    <NavLink
                        to="/portfolio"
                        className="portofolio-link"
                        activeclassname="active"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faFolderOpen} color="#ffb904"></FontAwesomeIcon>
                    </NavLink>
                    <NavLink 
                        to="/contact"
                        className="contact-link"
                        onClick={() => setShowNav(false)}>
                        <FontAwesomeIcon icon={faEnvelope} color="#ffb904"></FontAwesomeIcon>
                    </NavLink>
                </div>
                <FontAwesomeIcon
                    icon={faClose}
                    className="close-icon"
                    color="#fff"
                    size="3x"
                    onClick={() => setShowNav(false)}
                />
            </nav>
            <ul>
                <li>
                    <a href="" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="#999" className='anchor-icon'></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} color="#999" className='anchor-icon'></FontAwesomeIcon>
                    </a>
                </li>          
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#112"
                size="3x"
                className='hamburger-icon' />   
        </div>
    )
}

export default Sidebar;