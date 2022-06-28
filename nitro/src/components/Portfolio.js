import React,{useEffect} from 'react'
import '../styles/Portifolio.css'
import img from '../assets/img_1.jpg'
import img2 from '../assets/img_2.jpg'
import img3 from '../assets/img_3.jpg'
import img4 from '../assets/img_4.jpg'
import img5 from '../assets/img_5.jpg'
import img6 from '../assets/img_6.jpg'
import img7 from '../assets/img_7.jpg'
import img8 from '../assets/img_8.jpg'
import img9 from '../assets/img_9.jpg'
import img10 from '../assets/img_10.jpg'
import img11 from '../assets/img_11.jpg'
import img12 from '../assets/img_12.jpg'
import img13 from '../assets/img_13.jpg'
import "aos/dist/aos.css";
import AOS from 'aos';

function Portfolio() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='portfolio1'>


<section className="site-section" id="portfolio-section">
      

      <div className="container">

        <div className="row mb-3">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title mb-3">Portfolio</h2>
          </div>
        </div>

        <div className="row justify-content-center mb-5" data-aos="fade-up">
          <div id="filters" className="filters text-center button-group col-md-7">
            <button style={{marginRight:'10px'}} className="btn btn-primary active" data-filter="*">All</button>
            <button style={{marginRight:'10px'}} className="btn btn-primary" data-filter=".web">Web</button>
            <button style={{marginRight:'10px'}} className="btn btn-primary" data-filter=".design">Design</button>
            <button className="btn btn-primary" data-filter=".brand">Brand</button>
          </div>
        </div>  
        
        <div id="posts" className="row no-gutter">

        <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img5} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img5} />
            </a>
          </div>
          
          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img2} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img2} />
            </a>
          </div>

          <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img3} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img3} />
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">

            <a href={img4} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img4} />
            </a>

          </div>

         

          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img} />
            </a>
          </div>

          <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img6} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img6} />
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img9} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img9}/>
            </a>
          </div>

          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img11} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img11}/>
            </a>
          </div>

          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img13} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img13}/>
            </a>
          </div>

          

          

          

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img12} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img12}/>
            </a>
          </div>

          <div className="item web col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img8} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img8}/>
            </a>
          </div>

          

          <div className="item brand col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img10} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img10}/>
            </a>
          </div>

          <div className="item design col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4">
            <a href={img7} className="item-wrap fancybox" data-fancybox="gallery2">
              <span className="icon-search2"></span>
              <img className="img-fluid" src={img7}/>
            </a>
          </div>

          

       

         

        </div>
      </div>

    </section>
    


    </div>
  )
}

export default Portfolio