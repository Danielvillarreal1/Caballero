import React from 'react';

const Footer = () => {
    return ( 
        <>
        <footer id="footer">

    <div className="footer-top">

      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <a href="#header" className="scrollto footer-logo"><img src="assets/img/hero-logo.png" alt="" /></a>
            <h3>Knight</h3>
            <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
          </div>
        </div>

        <div className="row footer-newsletter justify-content-center">
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email" placeholder="Enter your Email" /><input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>

        <div className="social-links">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>

      </div>
    </div>

    <div className="container footer-bottom clearfix">
      <div className="copyright">
        &copy; Copyright <strong><span>Knight</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
        </>
     );
}
 
export default Footer;