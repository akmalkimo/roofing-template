import React from 'react'

function Hero(){
  return (
    <>
    <div className="heroWrapper">
      <div className="hello">Your Reliable Roofing Company</div>
      <h1 className='companyName'>Great Roofing</h1>
      <div className="heroCard1Wrapper">
        <div className="heroCard1">
          <h3 className='requestIns'>Request a free inspection</h3>
          <form action="#" className='form1'>
            <select className='select'>
              <option className='optionbyebye'>Closest Great Roofing Branch</option>
              <option>Texas</option>
              <option>California</option>
              <option>Ohio</option>
              <option>North Carolina</option>
              <option>Canada</option>
            </select>
            <select className='select'>
              <option className='optionbyebye'>What type of building would you like inspected?</option>
              <option>Single Family Residence</option>
              <option>Business with a Steep Slope Roof</option>
              <option>{"Home(s) in an HOA with Group Insurance"}</option>
            </select>
            <div className="inputWrapper">
              <input type="text" placeholder='First Name' required />
              <input type="text" placeholder='Last Name' required />
            </div>
            <input type="tel" required placeholder='Mobile' />
            <input type="email" required placeholder='Email'/>
            <textarea placeholder='Additional info'></textarea>
            <div><button type='submit' className='submitButton'>Request Inspection</button></div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
