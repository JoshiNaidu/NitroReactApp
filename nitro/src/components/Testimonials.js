import React,{useEffect} from 'react'
import '../styles/Testimonials.css'
import about1 from '../assets/about_1.jpg'
import person2 from '../assets/person_2.png'
import person3 from '../assets/person_3.png'
import person4 from '../assets/person_4.png'
// import AOS from "aos";
// import "aos/dist/aos.css";

function Testimonials() {

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    //   }, []);
  return (
    <div className='test1'>

<section className="site-section testimonial-wrap" id="testimonials-section" data-aos={"fade"}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Testimonials</h2>
          </div>
        </div>
      </div>
      <div className="slide-one-item home-slider owl-carousel">
          <div>
            <div className="testimonial">
              
              <blockquote className="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>

              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div><img src={person3} alt="Image" className="w-50 img-fluid mb-3"/></div>
                <p>John Smith</p>
              </figure>
            </div>
          </div>
          <div>
            <div className="testimonial">

              <blockquote className="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div><img src={person2} alt="Image" className="w-50 img-fluid mb-3"/></div>
                <p>Christine Aguilar</p>
              </figure>
              
            </div>
          </div>

          <div>
            <div className="testimonial">

              <blockquote className="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div><img src={person4} alt="Image" className="w-50 img-fluid mb-3"/></div>
                <p>Robert Spears</p>
              </figure>

              
            </div>
          </div>

          <div>
            <div className="testimonial">

              <blockquote className="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              <figure className="mb-4 d-flex align-items-center justify-content-center">
                <div><img src={person4} alt="Image" className="w-50 img-fluid mb-3"/></div>
                <p>Bruce Rogers</p>
              </figure>

            </div>
          </div>

        </div>
    </section>

<section className="site-section bg-light" id="pricing-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title mb-3">Pricing</h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="">
            <div className="pricing">
              <h3 className="text-center text-black">Basic</h3>
              <div className="price text-center mb-4 ">
                <span><span>$47</span> / year</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li className="remove">Lorem ipsum dolor sit amet</li>
                <li className="remove">Consectetur adipisicing elit</li>
                <li className="remove">Dolorum esse odio quas architecto sint</li>
              </ul>
              <p className="text-center">
                <a href="#" className="btn btn-secondary">Buy Now</a>
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing">
              <h3 className="text-center text-black">Premium</h3>
              <div className="price text-center mb-4 ">
                <span><span>$200</span> / year</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li className="remove">Dolorum esse odio quas architecto sint</li>
              </ul>
              <p className="text-center">
                <a href="#" className="btn btn-primary">Buy Now</a>
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="pricing">
              <h3 className="text-center text-black">Professional</h3>
              <div className="price text-center mb-4 ">
                <span><span>$750</span> / year</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li>Officia quaerat eaque neque</li>
                <li>Possimus aut consequuntur incidunt</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Dolorum esse odio quas architecto sint</li>
              </ul>
              <p className="text-center">
                <a href="#" className="btn btn-secondary">Buy Now</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="row site-section" id="faq-section">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title">Frequently Ask Questions</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What available is refund period?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>

            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What available is refund period?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
          </div>
          <div className="col-lg-6">

            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">Where are you from?</h3>
              <p>Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.</p>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What is your opening time?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>

            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What available is refund period?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="site-section" id="about-section">
      <div className="container">
        <div className="row mb-5">
          
          <div className="col-lg-5 ml-auto mb-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="">
            <img src={about1} alt="Image" className="img-fluid rounded"/>
          </div>
          <div className="col-lg-6 order-2 order-lg-1" data-aos="fade">

            <div className="row">

              
              
              <div className="col-md-12 mb-md-5 mb-0 col-lg-6" data-aos="fade-up" data-aos-delay="">
                <div className="unit-4">
                  <div className="unit-4-icon mr-4 mb-3"><span className="text-primary flaticon-head"></span></div>
                  <div>
                    <h3>Web &amp; Mobile Specialties</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
                    <p className="mb-0"><a href="#">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-md-5 mb-0 col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="unit-4">
                  <div className="unit-4-icon mr-4 mb-3"><span className="text-primary flaticon-smartphone"></span></div>
                  <div>
                    <h3>Intuitive Thinkers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</p>
                    <p className="mb-0"><a href="#">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </div>
  )
}

export default Testimonials