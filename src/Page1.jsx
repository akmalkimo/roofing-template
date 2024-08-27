import React from 'react'

function Page1() {
  return (
    <div className='roofsWrapper'>
      <div className="roofs">
        <div>
            <img src="public/roofing.jpg" alt='roofing picture' />
            <h2>RESIDENTIAL ROOFING</h2>
            <p>Roofing for single-family homes and residential roofing.</p>
            <button className="learnMoreButton">Learn More</button>
        </div>
        <div>
            <img src="public/roofing2.jpg" alt='roofing picture' />
            <h2>MULTI-FAMILY ROOFING</h2>
            <p>Roofing for home(s) in an HOA with group insurance.</p>
            <button className="learnMoreButton">Learn More</button>
        </div>
        <div>
            <img src="public/roofing3.jpg" alt='roofing picture' />
            <h2>ROOFING FOR BUSINESSES</h2>
            <p>Roofing for businesses with steep-slope roofs.</p>
            <button className="learnMoreButton">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Page1
