import React, { useState } from 'react'
import "/src/Contact.css"

const Contact = () => {
  return (
    <div className='contact-items'>
        <h1>Contact information</h1>
        <div className="uls">
            <ul>
                <li>Address: 198 West</li>
                <li>21th Street, Suite</li>
                <li>721 New York NY</li>
                <li>10016</li>
            </ul>
            <div>Phone: <span>+ 1235 2355 98</span></div>
            <div>Email: <span>info@yoursite.com</span></div>
            <div>Website: <span>yoursite.com</span></div>
        </div>
        <form action="#">
            <input placeholder='Your Name' type="text" />
            <input placeholder='Your Email' type="text" />
            <input placeholder='Subject' type="text" />
            <textarea placeholder='Massage'/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Contact