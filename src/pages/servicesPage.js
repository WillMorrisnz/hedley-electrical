import React from 'react';
import image from '../assets/images/image0.png'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.jpeg'

const ServicesPage = () => {
    return (
        <main>
            <section className='p-1'>
                <div className='container shadow grid background-700-blue p-1'>
                    <h3 className='text-bright-blue'>
                        Residential
                    </h3>
                    <div className='stacked grid'>
                        <img src={image} className='card__img'></img>
                        <div className='blue_gradient'></div>
                    </div>
                    <div className='grid-2'>
                        <ul className='list-items'>
                            <li>
                                House re-wiring
                            </li>
                            <li>
                                Lighting design
                            </li>
                            <li>
                                Lighting installation
                            </li>
                            <li>
                                Switchboard replacements
                            </li>
                        </ul>
                        <p className='text-white'>
                        Our expertise in providing electrical solutions for renovations and new home builds means that we can guide you through the process so that the end result meets your expectations. We provide project management support from concept to completion of our projects – Residential Electricians Auckland.
                        </p>
                    </div>
                </div>
            </section>
            <section className='p-1'>
                <div className='container shadow grid background-700-blue p-1'>
                    <h3 className='text-bright-blue'>
                        Commercial
                    </h3>
                    <div className='stacked grid'>
                        <img src={image1} className='card__img'></img>
                        <div className='blue_gradient'></div>
                    </div>
                    <div className='grid-2'>
                        <ul className='list-items'>
                            <li>
                                House re-wiring
                            </li>
                            <li>
                                Lighting design
                            </li>
                            <li>
                                Lighting installation
                            </li>
                            <li>
                                Switchboard replacements
                            </li>
                        </ul>
                        <p className='text-white'>
                        Our expertise in providing electrical solutions for renovations and new home builds means that we can guide you through the process so that the end result meets your expectations. We provide project management support from concept to completion of our projects – Residential Electricians Auckland.
                        </p>
                    </div>
                </div>
            </section>
            <section className='p-1'>
                <div className='container shadow grid background-700-blue p-1'>
                    <h3 className='text-bright-blue'>
                        Gate Automation
                    </h3>
                    <div className='stacked grid'>
                        <img src={image2} className='card__img'></img>
                        <div className='blue_gradient'></div>
                    </div>
                    <div className='grid-2'>
                        <ul className='list-items'>
                            <li>
                                House re-wiring
                            </li>
                            <li>
                                Lighting design
                            </li>
                            <li>
                                Lighting installation
                            </li>
                            <li>
                                Switchboard replacements
                            </li>
                        </ul>
                        <p className='text-white'>
                        Our expertise in providing electrical solutions for renovations and new home builds means that we can guide you through the process so that the end result meets your expectations. We provide project management support from concept to completion of our projects – Residential Electricians Auckland.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ServicesPage