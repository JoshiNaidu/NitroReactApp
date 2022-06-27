import React from 'react'
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {

    var Year = new Date();
    const y  = Year.getTime();
    console.log(y)
  return (
    <div className='f1'>

        
        
<div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-5">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
              </div>
              <div className="col-md-3 ml-auto">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#about-section" className="smoothscroll">About Us</a></li>
                  <li><a href="#services-section" className="smoothscroll">Services</a></li>
                  <li><a href="#testimonials-section" className="smoothscroll">Testimonials</a></li>
                  <li><a href="#contact-section" className="smoothscroll">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Follow Us</h2>
                <a href="#" className="pl-0 pr-3"> <i className='fab fa-facebook'></i></a>
                <a href="#" className="pl-3 pr-3"><i className='fab fa-twitter'/></a>
                <a href="#" className="pl-3 pr-3"><i className='fab fa-instagram'/></a>
                <a href="#" className="pl-3 pr-3"><i className='fab fa-linkedin'/></a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
            <form action="#" method="post" className="footer-subscribe">
              <div className="input-group mb-3">
                <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary text-black" type="button" id="button-addon2">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
            Copyright &copy; {Year.getFullYear()}  All rights reserved | This template is made with <FontAwesomeIcon icon="fa-solid fa-heart" /> ❤️  by <a href="https://github.com/JoshiNaidu" target="_blank" >JOSHI</a> Using ReactJs and took reference from <a href='https://technext.github.io/nitro2/index.html#' target="_blank">Nitro</a>
            </p>
        
            </div>
          </div>
          
        </div>
      </div>


    </div>
  )
}

export default Footer