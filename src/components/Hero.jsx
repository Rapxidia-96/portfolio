import React from 'react';
// import'@styles/Hero.scss';
import '../styles/Hero.scss'
// import foto from '@images/profile.jpg';
import foto from '../assets/images/profile.jpg'
const Hero = () => {
    return (
        <section className="hero-container">
            <div className="picture">
                <img src={foto} alt="" />
            </div>
            <div className="info">
                <h1>Rodrigo Alfonso Topete Anaya</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minima at sunt, molestias animi alias suscipit autem obcaecati cumque lo lo</p>
            </div>
        </section>
    );
}

export default Hero;