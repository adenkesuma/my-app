import React from 'react';
import Animated from '../AnimatedLetters/Animated';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import './Contact.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [formInput, setFormInput] = useState({
        user_email: '',
        message: ''
    })

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, [])

    const handleChange = (e) => {
        setFormInput({
            ...formInput, [e?.target.name]:e?.target.value
        })
    }

    // const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send('service_fwaqyd4', 'template_dxkxq9q', formInput, '-csQL-qYkGdxAtt8v')
        .then((result) => {
            setFormInput({
                user_email: '',
                message: ''
            })
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <>
            <div id="contact" className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <Animated 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p><span>If you have an idea or project to talk about? </span>
                        Let me know about it down below or if you just want to talk about some general topics you can direcly hit me on my social media.
                    </p>
                    <div className='contact-form'>
                        <form method='post' onSubmit={(e) => handleSubmit(e)}>
                            <ul>
                                <li>
                                    <input name='user_email' type="email" placeholder="youremail@domain.com" value={formInput.user_email} onChange={(e) => handleChange(e)} required/>
                                </li>
                                <li>
                                    <textarea name="message" placeholder="message" id="message" value={formInput.message} onChange={(e) => handleChange(e)} required></textarea>
                                </li>
                                <li>
                                    <input type="submit" value="submit" className='flat-button'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                  Aden Kesuma
                  <br />
                  Indonesia, 
                  <br />
                  Sumatra utara, Medan
                  <br />
                  <span>aden@gmail.com</span>
               </div>
                <div className='wrap-map'>
                    <MapContainer center={[3.637707, 98.767193]} zoom={13} scrollWheelZoom={false} id="mapid">
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[3.637707, 98.767193]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact;
