import React, {useState, useRef} from 'react'

function Header(){

    const [menuChecked, setMenuChecked] = useState(false);

    const menuRef = useRef(null);
    const burgerRef = useRef(null);
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);
    const row3Ref = useRef(null);

    function openMenu(){
         setTimeout(() => {
                menuRef.current.style.transform = "translateX(0)";
                menuRef.current.style.transition = "transform 0.3s ease-out";}, 100)
                menuRef.current.style.display = "block"
                row1Ref.current.className = "hamburgerRow1Checked";
                row2Ref.current.className = "hamburgerRow2Checked";
                row3Ref.current.className = "hamburgerRow3Checked";
                burgerRef.current.className = "hamburgerChecked";
                setMenuChecked(true);
    }

    function closeMenu(){
            menuRef.current.style.transform = "translateX(100%)";
            setTimeout(() => menuRef.current.style.display = "none", 250);
            row1Ref.current.className = "hamburgerRow1";
            row2Ref.current.className = "hamburgerRow2";
            row3Ref.current.className = "hamburgerRow3";
            burgerRef.current.className = "hamburger";
            setMenuChecked(false);
    }

    function handleMenu(){
        if(menuChecked === false){
            openMenu();
        }else{
            closeMenu();
        }
    }

    return(
        <>
        <nav>
            <div className="mobileNavWrapper" id="#">
                <div className="menu" ref={menuRef}>
                    <ul className="burgerNav">  
                        <li><a href="#page1" onClick={closeMenu}>Home</a></li>
                        <li><a href="#page2" onClick={closeMenu}>About Us</a></li>
                        <li><a href="#page3" onClick={closeMenu}>Career</a></li>
                        <li><a href="#page4" onClick={closeMenu}>Contact Us</a></li>
                    </ul>
                </div>
                <div className="hamburgerWrapper">
                    <div className="hamburger" ref={burgerRef} onClick={handleMenu}>
                        <div className="hamburgerRow1" ref={row1Ref}></div>
                        <div className="hamburgerRow2" ref={row2Ref}></div>
                        <div className="hamburgerRow3" ref={row3Ref}></div>
                    </div>
                </div>
            </div>
            <div className="normalNav">
                <a href="#page1">Home</a>
                <a href="#page2">About Me</a>
                <a href="#page3">Career</a>
                <a href="#page4">Contact Us</a>
            </div>
        </nav>
        </>
    )
}

export default Header