import Hero from "./Hero"
import Page1 from "./Page1"
import Page2 from "./Page2"
import Testimonials from "./Testimonials"

function Content(){
    return (
        <>
        <div className="underHeader">
            <img src="https://placehold.co/40" alt="logo" className='logo' />
            <button className="underHeaderButton">Request Inspection</button>
        </div> 
        <Hero />
        <Page1 />
        <Page2 />
        <Testimonials />
        </>
    )
}

export default Content