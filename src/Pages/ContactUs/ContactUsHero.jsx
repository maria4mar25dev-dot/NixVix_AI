import React from 'react'
import { IMAGES } from '../../Images'
import Contact from '../../CommonComponents/Contact/Contact'

function ContactUsHero() {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${IMAGES.heroImg6})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"> </div>
      <div className="relative z-10 lg:mt-32 ">
        <Contact alt={true} />
      </div>
    </div>
  )
}

export default ContactUsHero
