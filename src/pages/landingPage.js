import React from 'react';

const LandingPage = () => {
    const projects = [
        {
            title: 'Residential',
            description: 'As Regional Winners in the Registered Master Builders House of the Year competition 2021, Hawke’s Bay Electrical helped make this beautiful beach house shine. Boasting a Gold Award, and Regional Lifestyle Awards for outdoor living and bathroom, this exceptional beachside home takes centre stage in Waimarama, with views of the ocean, including Motu-o-Kura / Bare Island.',
            image: '',
            relatedProjects: [11, 2, 33, 5]
        },
        {
            title: 'Commercial',
            description: 'Complete fit-out of existing commercial building. This included demolition of existing walls, renovations to bathrooms and kitchen, development of commercial bar and outdoor dining area, concrete floor polishing, and installation of commercial air conditioning.',
            image: '',
            relatedProjects: [3, 4, 12]
        }
    ]

    return (
        <div>
            <section>
                <div className='header'>
                    <h1 className='title'>Hedley</h1>
                    <h2 className='sub-title'>Electrical</h2>

                </div>
                <div>
                <h3>Providing electrical services to the Manawatu for over 50 years</h3>
                </div>
            </section>
            <br className='spacer'></br>
            
            <section className='backdrop' >
                <div className='container row'>
                    {projects.map((project) => {
                        return(
                            <div key={project.title} className='card col'>
                                <h4 className='lemon'>{project.title}</h4>
                                <p className='card-p'>{project.description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>

        </div>
    )
}

export default LandingPage