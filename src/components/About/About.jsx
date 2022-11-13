import React from 'react';
import { useState, useEffect } from 'react';
import Animated from '../AnimatedLetters/Animated';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBootstrap,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import './About.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    return (
        <>
            <div id="about" className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <Animated
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p className='p-1'><span>It's actually wierd...</span> Because just four months ago i have no idea what web development, but now i really like web development, expecially front-end developer.</p>
                    <p className='p-2'><span>How i got into front end web ? </span> 
                        It all started around 4 months ago, when i was confused about what major to take when i was in collage, 
                        and at the time there was a friend of mine named <i>Kenny</i> who was good at computers, and he advised me to
                        learn front end developer because i like design.
                    </p>
                    <p className='p-3'><span>And then...</span> now i really love front end developer, and i can use react, git, bootsrap, etc.</p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faBootstrap} color="#6300a5" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default About;
