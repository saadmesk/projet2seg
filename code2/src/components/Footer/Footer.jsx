import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            {/* left side */}
            <div className="flexColStart f-left">
                <img src="./logo.png" alt="" width={120} />

                <span className="secondaryText">
                    Our vision is to make all people <br />
                    the best place to live for them.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText">222 Bellingham Street, Ottawa, ON, K1N 8Z7</span>
                <span className="secondaryText">Phone Number: +1 654 7895</span>
                <span className="secondaryText">Socials: @c&tproperties</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer