import React,{useEffect} from 'react'
import '../styles/Home.css'
import Header from '../components/Header'
import AOS from 'aos'
import "aos/dist/aos.css";



function Home() {
  useEffect(()=>{
 AOS.init();
 AOS.refresh();
  },[]);

  const handle = () =>{
    console.log('hi')
    var x = document.getElementById("about-section");
    x.scrollIntoView();
  }
  return (
    <div className='home'>
   
   <div className='head1'>

    <Header/>
   </div>
      

      <h1>Welcome</h1>

      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta <br/> eius error.


      </p>
      <button type="button" class="send btn btn-primary text-white" style={{background:"#007bff"}} data-aos='fade-up'>Get In Touch</button>
      <br/>
      {/* <i class="fa-thin fa-computer-mouse-scrollwheel"></i> */}
      
      <div className='middle' onClick={handle}>
        <div className='mouse'>

        </div>
      </div>

  {/* <div className="site-wrap">

    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
   
    
    <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-6 col-xl-2">
            <h1 className="mb-0 site-logo"><a href="index.html" className="h2 mb-0">Nitro<span className="text-primary">.</span> </a></h1>
          </div>

          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right" role="navigation">

              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li><a href="#home-section" className="nav-link">Home</a></li>
                <li className="has-children">
                  <a href="#about-section" className="nav-link">About Us</a>
                  <ul className="dropdown">
                    <li><a href="#team-section" className="nav-link">Team</a></li>
                    <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
                    <li><a href="#faq-section" className="nav-link">FAQ</a></li>
                    <li className="has-children">
                      <a href="#">More Links</a>
                      <ul className="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                
                <li><a href="#portfolio-section" className="nav-link">Portfolio</a></li>
                <li><a href="#services-section" className="nav-link">Services</a></li>
                <li><a href="#testimonials-section" className="nav-link">Testimonials</a></li>
                <li><a href="#blog-section" className="nav-link">Blog</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li>
              </ul>
            </nav>
          </div>


          <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" style="position: relative; top: 3px;"><a href="#" className="site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3"></span></a></div>

        </div>
      </div>
      
    </header>

  
     
    <div className="site-blocks-cover overlay" style="background-image: url(images/hero_2.jpg);" data-aos="fade" id="home-section">

      <div className="container">
        <div className="row align-items-center justify-content-center">

          
          <div className="col-md-8 mt-lg-5 text-center">
            <h1 className="text-uppercase" data-aos="fade-up">Welcome</h1>
            <p className="mb-5 desc"  data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio soluta eius error.</p>
            <div data-aos="fade-up" data-aos-delay="100">
              <a href="#contact-section" className="btn smoothscroll btn-primary mr-2 mb-2">Get In Touch</a>
            </div>
          </div>
            
        </div>
      </div>

      <a href="#about-section" className="mouse smoothscroll">
        <span className="mouse-icon">
          <span className="mouse-wheel"></span>
        </span>
      </a>
    </div> 

    </div> */}
    </div>
  )
}

export default Home