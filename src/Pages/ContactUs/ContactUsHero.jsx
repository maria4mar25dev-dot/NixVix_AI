import React from 'react'
import {IMAGES} from '../../Images'
import Contact from '../../CommonComponents/Contact/Contact'

function ContactUsHero() {
  return (
    <div
          className="hero-section relative"
          style={{ backgroundImage: `url(${IMAGES.heroImg6})`}}
        >
      <div className="overlay"  >

      </div>
       <div className="relative z-10 ">
        <Contact alt={true} />
      </div>
        </div>
  )
}

export default ContactUsHero
