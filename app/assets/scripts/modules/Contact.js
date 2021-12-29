import React from 'react'

function Contact() {
    return (
        <section className="contact-section">
            <h2 className="btn contact-section__heading--2">Get in Touch</h2>
            <p className="contact-section--paragra">
                Intersted in learning more about me, my work or how we collaborate on an upcoming project?
                feel free to reach out anytime I would be more than happy to talk about it.
            </p>
            <form className="contact__form">
                <div className="text__form">
                    <label className="label__form" htmlFor="name">First Name</label>
                    <input className="input__form" id="name" type="text" name="name" placeholder="Enter your first name" />
                </div>
                
                <div className="text__form">
                    <label className="label__form" htmlFor="name">Last Name</label>
                    <input className="input__form" id="name" type="text" name="name" placeholder="Enter your last name" />
                </div>

                <div className="text__form">
                    <label className="label__form" htmlFor="email">Email *</label>
                    <input className="input__form" id="email" type="text" name="name" placeholder="Enter your email" />
                </div>
                
                <div className="text__form">
                    <label className="label__form" htmlFor="phone">Phone *</label>
                    <input className="input__form" id="phone" type="text" name="name" placeholder="Enter your phone" />
                </div>
                <div className="text-area">
                    <h2 className="text-area--heading">Message</h2>
                </div>
                <textarea placeholder="Type your message here..." name="textarea" id="textarea" cols="3" rows="3"></textarea>
                <button className="btn-textarea">Submit</button>
            </form>
        </section>
    )
}

export default Contact
