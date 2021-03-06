import React from 'react';

const Hero = () => {
    return (  
        <>
          <section id="hero">
    <div className="hero-container">
      <a href="/index.html" className="hero-logo" data-aos="zoom-in"><img src="assets/img/hero-logo.png" alt="" /></a>
      <h1 data-aos="zoom-in">Welcome To Knight Studios</h1>
      <h2 data-aos="fade-up">We are team of talanted designers making websites with Bootstrap</h2>
      <a data-aos="fade-up" href="/About" className="btn-get-started scrollto">Get Started</a>
    </div>
  </section>
        </>
    );
}
 
export default Hero;