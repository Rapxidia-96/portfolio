import React from 'react';
// import '@styles/Portfolio.scss';
import '../styles/Portfolio.scss'
// import proyect from '@images/1.jpg';
import proyect from '../assets/proyects/React-shop.webp';

const Portfolio = () => {
    const proyects = [
        {
            'title':'React-Shop',
            'course':'Plazti',
            'lenguages':[
                'HTML',
                'CSS',
                'JavaScript'    
            ],
            'description':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, cumque! Aliquam nam, non eos quaerat consectetur reicihil temporibus perspiciatis',
            'image': proyect
        }
    ]
    return (
        <section className='portfolio'>
            <div className="portfolio__container">
                <h2>Portafolio</h2>
                {proyects.map((proyect)=>(
                    <article className="portfolio__project">
                    <div className="portfolio__project--details">
                        <div>
                            <h3 className="portfolio__project--title">
                                {proyect.title}
                            </h3>
                            <p className="portfolio__project--course"> {proyect.course}</p>
                        </div>
                        <ul>
                            {proyect.lenguages.map((lenguage)=>(
                                <li className="portfolio__project--item">{lenguage}</li>
                            ))}
                        </ul>
                        <p className="portfolio__project--description"> {proyect.description}</p>
                    </div>
                        <figure className="portfolio__project--image-container">
                            <img className='portfolio__project--image' src= {proyect.image} alt="" />
                        </figure>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;

