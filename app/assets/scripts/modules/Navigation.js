import React from 'react'

function Navigation() {
    return (
        <div className='header'>
            <div>
                <img src="../assets/images/portfolio_logo.jpg" className='header--logo' alt="portfolio logo" />
            </div>
            <div className="header__item">
                <svg className="btn-icon">
                    <use className='btn-icon--1' xlinkHref='assets/images/sprite.svg#icon-linkedin2'></use>
                </svg>
                <svg className="btn-icon">
                    <use className='btn-icon--2' xlinkHref='assets/images/sprite.svg#icon-github'></use>
                </svg>
            </div>
        </div>
    )
}

export default Navigation
