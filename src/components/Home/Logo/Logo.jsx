import React from 'react';
import LogoText from '../../../assets/NameHome.png';
import './Logo.scss';

const Logo = () => {
    return (
        <div className='logo'>
            <img 
                src={LogoText}
                alt="Logo text" 
                className='logo__img'
            />
        </div>
    )
}

export default Logo;
