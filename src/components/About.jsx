import React from 'react'
import "/src/About.css"
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const About = () => {
  return (
    <div className='about-items'>
        <div className="about">
            <img src="https://png.pngtree.com/png-vector/20230227/ourmid/pngtree-golden-ticket-png-image_6621563.png" alt="" />
            <div className="text-about">
                <h1>Libro is a Magazine website</h1>
                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
            </div>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>

            <div className="follow">
                <h2>Follow us here</h2>
                <div className="link"><AiFillTwitterCircle /> <PiInstagramLogoFill /> <FaFacebook /></div>
            </div>
        </div>
    </div>
  )
}

export default About