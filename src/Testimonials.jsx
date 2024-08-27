import React from 'react'

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="cover">
            <h4>Best Roofing Company</h4>
            <h2>TESTIMONIALS</h2>
            <span className="blueStripe"></span>
            <div className='testimonial'>
                <div className="testTitle">QUICK RESPONSE</div>
                <div className="5stars"></div>
                <p className='review'>Quick response and great customer service. I had small water leak and Greg got here, did a thorough inspection, found a trouble area, and sealed it up.</p>
                <p className="person">Jhon Doe</p>
                <div className="googleLogo"></div>
            </div>
            <div className='testimonial'>
                <div className="testTitle">Very Professional</div>
                <div className="5stars"></div>
                <p className='review'>Timely, Very Professional, Very Good Work Ethic!! Thanks to Ms Dyamond Humphries, Field Representative & Mr Nick Witt, Project Manager.</p>
                <p className="person">Jhon Doe</p>
                <div className="googleLogo"></div>
            </div>
            <div className='testimonial'>
                <div className="testTitle">Great Customer Service</div>
                <div className="5stars"></div>
                <p className='review'>I would recommend this company to anyone. The rep in our neighborhood had great customer service and we loved his jovial, but informed communication skills. If you go with this company, ask for Malik O! He followed up with our claim and kept us informed.</p>
                <p className="person">Jhon Doe</p>
                <div className="googleLogo"></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
