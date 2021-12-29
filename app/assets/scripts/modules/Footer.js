import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>            
            <div className="footer__nav">
                <h4 className='footer__heading--4'>Links</h4>
                <ul className="footer__link">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer__nav">
                <h4 className='footer__nav'>Social</h4>
                <a role="button" className="link"  href="http://github.com/">Github</a><br />
                <a role="button" className="link"  href="http://linkedin.com/">LinkedIn</a><br />
            </div>
            <div className="footer__nav">
            <h4 className='footer__heading--4'>Contact</h4>
                <a className="link"  href="tel:+19999999999">+ 1-999-999-9999</a><br />
                <a className="link" href="mailto:itIsreal@gmail.com"> desiemeng21m@gmail.com</a>
            </div>
        </footer>
    )
}

export default Footer
