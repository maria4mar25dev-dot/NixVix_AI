import React from 'react'
import { IMAGES } from "../../Images";
import './Footer.css'
function Footer() {
  return (
    <div style={{paddingBottom:"30px"}}>
    
        <footer className="footer-box">
          <div className='content-box'>
          <div className="footer-left">
            <img src={IMAGES.logo} alt="Nixense Vixion" className=" w-[50px] h-[40px]          /* Base: Mobile */
            sm:w-[70px] sm:h-[60px]    /* Small screens ≥ 640px */
            md:w-[70px] md:h-[60px]    /* Medium screens ≥ 768px */
            lg:w-[85px] lg:h-[75px]   /* Large screens ≥ 1024px */
            xl:w-[90px] xl:h-[80px] object-contain"/>
            <span className=" text-xl sm:text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] xl:text-[2rem] leading-none font-bold py-6">Nixense<br/>Vixion</span>
          </div>

          <div className="footer-center">
            <p>
              To be the global catalyst for human-centered AI innovation — shaping a smarter, more connected future, one algorithm at a time.
            </p>
          </div>

          <div className="footer-right">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                <img src={IMAGES.locationIcon}/>
               </span>
              <span>Location : Lahore, Pakistan</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                 <img src={IMAGES.contactIcon}/>
              </span>
              <span>Phone: +92 307 5741522</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon" aria-hidden="true">
                 <img src={IMAGES.emailIcon} />
              </span>
              <span>Email: hello@nixvix.ai</span>
            </div>
          </div>
    
  </div>
                 <button className="scroll-top"   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path fill="currentColor" d="M12 4l-8 8h5v8h6v-8h5z" />
    </svg>
  </button>
        </footer>
           
        <div className="footer-bottom">Copyright Nixense Vixion.</div>
    
    </div>
  )
}



export default Footer
