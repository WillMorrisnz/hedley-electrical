import React from 'react';

const LandingPage = () => {
    const projects = [
        {
            title: 'Gate Automation',
            description: 'Gates have be automated',
            image: '',
            relatedProjects: [11, 2, 33, 5]
        },
        {
            title: 'Comercial',
            description: 'Comercial projects',
            image: '',
            relatedProjects: [3, 4, 12]
        }
    ]

    return (
        <div>
            <header className='hero'>
                <h1>Hedley Electrical</h1>
            </header>
            <div className='container'>
                {projects.map((project) => {
                    return(
                        <div className='col'>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>

                        </div>
                    )
                })}
            </div>
            Landed
        </div>
    )
}

export default LandingPage