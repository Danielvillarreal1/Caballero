import React from 'react';

const Home = () => {
    return ( 
        <>
        {/* <section id="hero">
    <div class="hero-container">
      <a href="/index.html" class="hero-logo" data-aos="zoom-in"><img src="assets/img/hero-logo.png" alt="" /></a>
      <h1 data-aos="zoom-in">Welcome To Knight Studios</h1>
      <h2 data-aos="fade-up">We are team of talanted designers making websites with Bootstrap</h2>
      <a data-aos="fade-up" href="/About" class="btn-get-started scrollto">Get Started</a>
    </div>
  </section> */}

 
  <header id="header" class="d-flex align-items-center">
    <div class="container">

     
      <div class="logo d-block d-lg-none">
        <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul class="nav-inner">
          <li class="active"><a href="/Hero">Home</a></li>
          <li class="drop-down"><a href="/Hero">About</a>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Team</a></li>

              <li class="drop-down"><a href="#">Deep Drop</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="/Services">Services</a></li>
        
          <li class="nav-logo"><a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a></li>

          <li><a href="/Portfolio">Portfolio</a></li>
          <li><a href="/Pricing">Pricing</a></li>
          <li><a href="Contact">Contact</a></li>

        </ul>
      </nav>

    </div>
  </header>
        </>
     );
}
 
export default Home;