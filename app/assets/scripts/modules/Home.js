import React from 'react'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import Sidebar from './Sidebar'
import WorkAndProject from './WorkAndProject'

function Home() {
    return (
        <div className='content'>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="hero">
                <Hero />
                <div>
                    <WorkAndProject />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home
