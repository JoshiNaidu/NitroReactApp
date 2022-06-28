import React,{useEffect} from 'react'
import img from '../assets/img_1.jpg'
import img1 from '../assets/img_3.jpg'
import img2 from '../assets/img_4.jpg'
import '../styles/Blog.css'
import AOS from 'aos'
import "aos/dist/aos.css";


function Blog() {
  useEffect(()=>{
     AOS.init();
     AOS.refresh();
  },[])
  return (
    <div classNameName='blog1'>
<section className="site-section" id="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade">
            <h2 className="section-title mb-3">Our Blog</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="">
            <div className="h-entry">
              <a href="single.html">
                <img src={img} alt="Image" className="img-fluid"/>
              </a>
              <h2 className="font-size-regular"><a href="#">Where Do You Learn HTML & CSS in 2019?</a></h2>
              <div className="meta mb-4">Ham Brook <span className="mx-2">•</span> Jan 18, 2019<span className="mx-2">•</span> <a  href="#" >News</a></div>
              <span style={{color:'grey'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</span>
              <p><a href="#">Continue Reading...</a></p>
            </div> 
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="h-entry">
              <a href="single.html">
                <img src={img2} alt="Image" className="img-fluid"/>
              </a>
              <h2 className="font-size-regular"><a href="#">Where Do You Learn HTML & CSS in 2019?</a></h2>
              <div className="meta mb-4">James Phelps <span className="mx-2">•</span> Jan 18, 2019<span className="mx-2">•</span> <a href="#">News</a></div>
             <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</span>
              <p><a href="#">Continue Reading...</a></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="h-entry">
              <a href="single.html">
                <img src={img1} alt="Image" className="img-fluid"/>
              </a>
              <h2 className="font-size-regular"><a href="#">Where Do You Learn HTML & CSS in 2019?</a></h2>
              <div className="meta mb-4">James Phelps <span className="mx-2">•</span> Jan 18, 2019<span className="mx-2">•</span> <a href="#">News</a></div>
              <span style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</span>
              <p><a href="#">Continue Reading...</a></p>
            </div> 
          </div>
          
        </div>
      </div>
    </section>



    </div>
  )
}

export default Blog