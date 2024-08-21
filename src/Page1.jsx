import React from 'react'

function Page1() {
  return (
    <>
      <div className="roofs">
        <div className="roofsCard1">
            <img src="public/roofing.jpg" alt='roofing picture' />
            <h2>Residential Roofing</h2>
            <p>Roofing for single-family homes and residential roofing.</p>
            <button className="learnMoreButton">Learn More</button>
        </div>
        <div className="roofsCard2">
            <img src="public/roofing2.jpg" alt='roofing picture' />
            <h2>Multi-Family Roofing</h2>
            <p>Roofing for home(s) in an HOA with group insurance.</p>
            <button className="learnMoreButton">Learn More</button>
        </div>
        <div className="roofsCard3">
            <img src="public/roofing3.jpg" alt='roofing picture' />
            <h2>Roofing For Businesses</h2>
            <p>Roofing for businesses with steep-slope roofs.</p>
            <button className="learnMoreButton">Learn More</button>
        </div>
      </div>
    </>
  )
}

export default Page1
