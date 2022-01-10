import React from 'react';
import image from '../assets/images/image0.png'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.jpeg'

const ServicesPage = () => {
    return (
        <section className='template-grid'>
            <div className='card-outline stacked'>
                <img className='card__img' src={image}></img>
                <div className='blue_gradient'></div>
                <div className='card__content'>
                    <h4 className='lemon'>Residential</h4>
                </div>
            </div>
            <div className='card-outline stacked'>
                <img className='card__img' src={image1}></img>
                <div className='blue_gradient'></div>
                <div className='card__content'>
                    <h4 className='lemon'>Commercial</h4>
                </div>
            </div>
            <div className='card-outline stacked'>
                <img className='card__img' src={image2}></img>
                <div className='blue_gradient'></div>
                <div className='card__content'>
                    <h4 className='lemon'>Gate Automation</h4>
                </div>
            </div>
        </section>
    )
}

export default ServicesPage