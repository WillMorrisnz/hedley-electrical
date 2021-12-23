import React from 'react';
import image1 from '../assets/images/image1.png'

const services = [
    {
        title: 'Gate Automation',
        description: 'We automate gates',
        image: image1
    }
]

const ServicesPage = () => {
    return (
        <div className='flex'>
            <div className='background-dark flex-item'>
            </div>
            <div className='background-primary flex-item'>
            </div>
        </div>
    )
}

export default ServicesPage