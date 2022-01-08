import React from 'react';
import about from '../data/about';
function Hero() {
    return (
        <div className='hero-content'>
            <div>
                <img src="assets/images/desProfile.jpg" alt="About Image" className='about-photo' />
            </div>
            <div>
                {about.map(abt => {
                    return (
                        <div key={abt.id} className="about-note">
                            <h2 className="about-note--title">{abt.title}</h2>
                            <h2 className="about-note--subtitle">{abt.subtitle}</h2>
                            <p className="about-note--paragraph">{abt.note1}</p>
                            <p className="about-note--paragraph">{abt.note2}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Hero
