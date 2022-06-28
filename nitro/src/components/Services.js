import React,{useEffect} from 'react'
import '../styles/Services.css'
import "aos/dist/aos.css";
import AOS from 'aos';

function Services() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='service1'>
        <section className="site-section border-bottom bg-light" id="services-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title mb-3">Our Services</h2>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
            <div className="unit-4">
              <div className="unit-4-icon mr-4"><i className='fab fa-facebook d-block h4 text-primary'></i></div>
              <div className='x'>
                <h3>Business Consulting</h3>
                <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="unit-4">
              <div className="unit-4-icon mr-4"><i className='fab fa-facebook d-block h4 text-primary'></i></div>
              <div>
                <h3>Market Analysis</h3>
                <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="unit-4">
              <div className="unit-4-icon mr-4"><i className='fab fa-facebook d-block h4 text-primary'></i></div>
              <div>
                <h3>User Monitoring</h3>
                <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>


          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="">
            <div className="unit-4">
              <div className="unit-4-icon mr-4"><i className='fab fa-facebook d-block h4 text-primary'></i></div>
              <div>
                <h3>Insurance Consulting</h3>
                <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="unit-4">
              <div className="unit-4-icon mr-4"><i className='fab fa-facebook d-block h4 text-primary'></i></div>
              <div>
                <h3>Financial Investment</h3>
                <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="unit-4">
              <div className="unit-4-icon mr-4"><i className='fab fa-facebook d-block h4 text-primary'></i></div>
              <div>
                <h3>Financial Management</h3>
                <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</span>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    </div>
  )
}

export default Services