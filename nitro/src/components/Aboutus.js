import React from 'react'
import '../styles/Aboutus.css'
import hero1 from '../assets/hero_1.jpg'
import slide1 from '../assets/slide_1.jpg'
import slide2 from '../assets/slide_2.jpg'
import slide3 from '../assets/slide_3.jpg'
import slide4 from '../assets/slide_4.jpg'
import person1 from '../assets/person_1.png'
import person2 from '../assets/person_2.png'
import person3 from '../assets/person_3.png'
import person4 from '../assets/person_4.png'
import person5 from '../assets/person_5.jpg'
import person6 from '../assets/person_6.jpg'
import person7 from '../assets/person_7.jpg'
import person8 from '../assets/person_8.jpg'


function Aboutus() {
  return (
    <div className='about1'>

<div className="site-section cta-big-image" id="about-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title mb-3">About Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">
            <figure className="circle-bg">
            <img src={hero1} alt="Image" className="img-fluid"/>
            </figure>
          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4">
              <h3 className="h3 mb-4 text-black">For the next great business</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</p>
              
            </div>
            
            
              
            <div className="mb-4">
              <ul className="list-unstyled ul-check success">
                <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
              </ul>
              
            </div>

            
            
          </div>
        </div>
      </div>  
    </div>

    <section className="site-section">
      <div className="container">

        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">Our Features</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
          </div>
        </div>
        
        <div className="row" >
          <div className="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="">

            <div className="owl-carousel slide-one-item-alt">
              <img src={slide1} alt="Image" className="img-fluid"/>
              <img src={slide2} alt="Image" className="img-fluid"/>
              <img src={slide3} alt="Image" className="img-fluid"/>
              <img src={slide4} alt="Image" className="img-fluid"/>
            </div>
            <div className="custom-direction">
              <a href="#" className="custom-prev"><span><span className="icon-keyboard_backspace"></span></span></a><a href="#" className="custom-next"><span><span className="icon-keyboard_backspace"></span></span></a>
            </div>

          </div>
          <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="100">
            
            <div className="owl-carousel slide-one-item-alt-text">
              <div>
                <h2 className="section-title mb-3">Minimal and Modern Design</h2>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit  Quo suscipit omnis iste velit maxime.</p>

                <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
              <div>
                <h2 className="section-title mb-3">Do things with love</h2>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit  Quo suscipit omnis iste velit maxime.</p>

                <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
              <div>
                <h2 className="section-title mb-3">Take your business online</h2>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit  Quo suscipit omnis iste velit maxime.</p>

                <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
              <div>
                <h2 className="section-title mb-3">4 Our Dedicated Professionals</h2>
                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit  Quo suscipit omnis iste velit maxime.</p>

                <p><a href="#" className="btn btn-primary mr-2 mb-2">Learn More</a></p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>


    
    <section className="site-section border-bottom" id="team-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="section-title mb-3" data-aos="fade-up" data-aos-delay="">Our Team</h2>
            <p className="lead" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
          </div>
        </div>
        <div className="row">
          

          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={person8} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Kaiara Spencer</h3>
                <span className="position">Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={person7} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Dave Simpson</h3>
                <span className="position">Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={person6} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Ben Thompson</h3>
                <span className="position">Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={person5} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Kyla Stewart</h3>
                <span className="position">Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={person1} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Kaiara Spencer</h3>
                <span className="position">Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={person2} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Dave Simpson</h3>
                <span className="position">Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={person3} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Ben Thompson</h3>
                <span className="position">Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="team-member">
              <figure>
                <ul className="social">
                  <li><a href="#"><span className="icon-facebook"></span></a></li>
                  <li><a href="#"><span className="icon-twitter"></span></a></li>
                  <li><a href="#"><span className="icon-linkedin"></span></a></li>
                  <li><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
                <img src={person4} alt="Image" className="img-fluid"/>
              </figure>
              <div className="p-3">
                <h3>Chris Stewart</h3>
                <span className="position">Product Manager</span>
              </div>
            </div>
          </div>


          
        </div>
      </div>
    </section>


    </div>
  )
}

export default Aboutus