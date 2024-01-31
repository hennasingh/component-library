import React from 'react'
import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialBody({icon, children}) {

    return (
        <div className="testimonial-div">
            <div className="icon">
                <img src={icon} alt='May Andersons wearing blue top' />
            </div>               
            <div className="testimonial-body">
                <ImQuotesLeft />
                {children}
            </div>
        </div>
    )
}