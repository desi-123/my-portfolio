import React from 'react'

function Navigation() {
    return (
        <div className='header'>
            <div>
                <img src="../assets/images/portfolio_logo.jpg" className='header--logo' alt="portfolio logo" />
            </div>
            <div className="header__item">
                <button className="btn btn-nav">
                    Get In Teach
                </button>
                <img src="../assets/images/desProfile.jpg" className='header--profile' alt="portfolio logo" />
            </div>
        </div>
    )
}

export default Navigation
