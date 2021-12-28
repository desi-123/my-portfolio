import React from 'react'
import project from '../data/project'
import gallery from '../data/gallery'

const WorkAndProject = () => {
    return (
        <div className='work-project'>
            <div className="gallery">
                {project.map((proj) => {
                    return (
                        <div className="paragraphs">
                            <h2 className="paragraphs__title">{proj.title}</h2>
                            <p className='paragraphs__paragraph'>{proj.paragraph1}</p>
                            <p className='paragraphs__paragraph'>{proj.paragraph2}</p>
                        </div>
                    )
                })}
            </div>
            <div className="gallery">
                <img src="./assets/images/contactme.png" alt="gallery" className='gallery__project gallery__project--img-1' />
                <img src="./assets/images/ecommerce.png" alt="gallery" className='gallery__project gallery__project--img-2' />
                <img src="./assets/images/contact.png" alt="gallery" className='gallery__project gallery__project--img-3' />
                <img src="./assets/images/singleProduct.png" alt="gallery" className='gallery__project gallery__project--img-4' />
            </div>
        </div>
    )
}

export default WorkAndProject
