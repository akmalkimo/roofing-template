import Hero from "./Hero"
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import Page4 from "./Page4"
import Page5 from "./Page5"

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
        <Page3 />
        <Page4 />
        <Page5 />
        </>
    )
}

export default Content