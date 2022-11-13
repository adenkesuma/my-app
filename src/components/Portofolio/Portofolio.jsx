import { useState, useEffect } from 'react';
import Animated from '../AnimatedLetters/Animated';
import { Link } from 'react-router-dom';
import Shoes from '../../assets/Shoes.png';
import Coffee from '../../assets/Coffee.png';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Portofolio.scss';

const Portofolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, [])

    return (
        <>
            <div id="portfolio" className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <Animated 
                            letterClass={letterClass}
                            strArray={['P', 'o', 'r', 't', 'o', 'f', 'o', 'l', 'i', 'o']}
                            idx={15}/>
                    </h1>
                    <p>
                        I once made a simple website using only html, css, javascript
                    </p>
                </div>
                <div className='projects'>
                    <div className='project'>
                        <Link 
                            className='link-project'
                            to="https://adenkesuma.github.io/web-coffee-shop//">Coffee Shop 
                            <FontAwesomeIcon className='icon' icon={faArrowUpRightFromSquare} color="#fff"></FontAwesomeIcon>
                        </Link>
                        <img src={Coffee} alt="Coffee shop"/>
                    </div>
                    <div className='project'>
                        <Link
                            className='link-project'
                            to="https://adenkesuma.github.io/web-ecommerce-nike-shoes/">Nike Shoes
                            <FontAwesomeIcon className='icon'  icon={faArrowUpRightFromSquare} color="#fff"></FontAwesomeIcon>
                        </Link>
                        <img src={Shoes} alt="Shoes ecommerce"/>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portofolio;
