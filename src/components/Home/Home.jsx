import React from 'react';
import './Home.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import Animated from '../AnimatedLetters/Animated';
import textlogo from '../../assets/CharName.png';
import Logo from './Logo/Logo';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['d', 'e', 'n', ' ', 'k', 'e', 's', 'u', 'm', 'a'];
    const jobArray = ['f', 'r', 'o', 'n', 't', '-', 'e', 'n', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])
    

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img
                            src={textlogo}
                            alt="JavaScript Developer Name, Web Developer Name"
                        />
                        <Animated
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br/>
                        <Animated
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={17}
                        />
                    </h1>
                    <h2>Front end developer & Student</h2>
                    <Link to="/contact" className='flat-button'>Contact me</Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Home;