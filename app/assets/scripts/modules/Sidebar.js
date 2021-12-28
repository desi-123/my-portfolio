import React from 'react'


function Sidebar() {
    return (
        <div className='side-content'>
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref='assets/images/sprite.svg#icon-home'></use>
                        </svg>
                        <span>Home</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref='assets/images/sprite.svg#icon-user-tie'></use>
                        </svg>
                        <span>About</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref='assets/images/sprite.svg#icon-profile'></use>
                        </svg>
                        <span>Projects</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a className="side-nav__link">
                        <svg className="side-nav__icon">
                            <use xlinkHref='assets/images/sprite.svg#icon-envelop'></use>
                        </svg>
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
            <div className="copy-right">
                &copy; 2021 By Desalegn Wagaw.
            </div>
        </div>
    )
}

export default Sidebar
