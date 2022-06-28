import React,{useEffect} from 'react'
import '../styles/Testimonials.css'
import about1 from '../assets/about_1.jpg'
import person2 from '../assets/person_2.png'
import person3 from '../assets/person_3.png'
import person4 from '../assets/person_4.png'
import Carousel from 'react-bootstrap/Carousel';
import AOS from "aos";
import "aos/dist/aos.css";

function Testimonials() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
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

<Carousel variant="dark">
      <Carousel.Item style={{height:'200px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <span style={{color:'grey',justifyContent:'center',alignItems:'center',width:'500px'}}>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</span>
        <Carousel.Caption>
        <div style={{width:'100px',height:'66px',marginLeft:'500px'}}><img src={person3} alt="Image" className="w-50 img-fluid mb-3"/></div>
                <span>John Smith</span>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{height:'200px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <span style={{color:'grey',justifyContent:'center',alignItems:'center',width:'500px'}}>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</span>
        <Carousel.Caption>
        <div style={{width:'100px',height:'66px',marginLeft:'500px'}}><img src={person3} alt="Image" className="w-50 img-fluid mb-3"/></div>
                <span>John Smith</span>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{height:'200px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <span style={{color:'grey',justifyContent:'center',alignItems:'center',width:'500px'}}>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</span>
        <Carousel.Caption>
        <div style={{width:'100px',height:'66px',marginLeft:'500px'}}><img src={person3} alt="Image" className="w-50 img-fluid mb-3"/></div>
                <span>John Smith</span>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{height:'200px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <span style={{color:'grey',justifyContent:'center',alignItems:'center',width:'500px'}}>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</span>
        <Carousel.Caption>
        <div style={{width:'100px',height:'66px',marginLeft:'500px'}}><img src={person3} alt="Image" className="w-50 img-fluid mb-3"/></div>
                <span>John Smith</span>
        </Carousel.Caption>
      </Carousel.Item>

      
      
     
    </Carousel>

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
                <span><span style={{color:'#007bff',fontSize:'30px'}}>$47</span> / year</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Officia quaerat eaque neque</li>
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Possimus aut consequuntur incidunt</li>
                <li className="remove"><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
<del>Lorem ipsum dolor sit amet</del></li>
                <li className="remove"><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
                <del>Consectetur adipisicing elit</del></li>
                <li className="remove"><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
                <del>Dolorum esse odio quas architecto sint</del></li>
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
                <span><span style={{color:'#007bff',fontSize:'30px'}}>$200</span> / year</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Officia quaerat eaque neque</li>
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Possimus aut consequuntur incidunt</li>
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Lorem ipsum dolor sit amet</li>
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Consectetur adipisicing elit</li>
                <li className="remove"><del><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>Dolorum esse odio quas architecto sint</del></li>
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
                <span><span style={{color:'#007bff',fontSize:'30px'}}>$750</span> / year</span>
              </div>
              <ul className="list-unstyled ul-check success mb-5">
                
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Officia quaerat eaque neque</li>
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Possimus aut consequuntur incidunt</li>
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Lorem ipsum dolor sit amet</li>
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Consectetur adipisicing elit</li>
                <li><i style={{color:'green'}} class="fa fa-check" aria-hidden="true"></i>
Dolorum esse odio quas architecto sint</li>
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
            <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</span>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What available is refund period?</h3>
              <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</span>
            </div>

            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
            <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</span>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What available is refund period?</h3>
              <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</span>
            </div>
          </div>
          <div className="col-lg-6">

            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">Where are you from?</h3>
              <span style={{color:'grey'}}>Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.</span>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What is your opening time?</h3>
              <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</span>
            </div>

            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-black h4 mb-4">Can I accept both Paypal and Stripe?</h3>
            <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</span>
            </div>
            
            <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-black h4 mb-4">What available is refund period?</h3>
              <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam assumenda eum blanditiis perferendis.</span>
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
                  <div className="unit-4-icon mr-4 mb-3"><i className='fab fa-facebook d-block h4 text-primary'></i></div>
                  <div>
                    <h3>Web &amp; Mobile Specialties</h3>
                    <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</span>
                    <p className="mb-0"><a href="#">Learn More</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-md-5 mb-0 col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="unit-4">
                  <div className="unit-4-icon mr-4 mb-3"><i className='fab fa-facebook d-block h4 text-primary'></i></div>
                  <div>
                    <h3>Intuitive Thinkers</h3>
                    <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</span>
                    <p className="mb-0"><a style={{color:"#007bff"}} href="#">Learn More</a></p>
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