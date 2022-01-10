import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import hamburgerIcon from '../assets/images/hamburger.svg'
import exitIcon from '../assets/images/exit.svg'



const Nav = () => {
    const [mobileTabOpen, setMobileTabOpen] = useState(false);
    const [location, setLocation] = useState(0)
    
    const routes = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/services',
            name: 'Services'
        },
        {
            path: '/about',
            name: 'About'
        },
        {
            path: '/contact',
            name: 'Contact'
        },
    ]

    // Toggles the mobile menu overlay
    const toggleMobileMenu = () => {
        setMobileTabOpen(!mobileTabOpen)
    }

    //Manages the back button functionality, so if a user has the mobile menu
    //open and goes back the menu is closed and updated correctly
    const routelocation = useLocation()
    if (routelocation.pathname != location) {
        setLocation(routelocation.pathname)
        setMobileTabOpen(false)
    } 

    return(
        <div>
            <div className='nav-container'>
                <img src={mobileTabOpen ? exitIcon : hamburgerIcon} onClick={toggleMobileMenu} className="mobile-nav-button"></img>
                <nav hidden={!mobileTabOpen} data-visible={mobileTabOpen}>
                    {routes.map((route) => {
                        return (
                            <Link key={route.path} className={location === route.path ? 'nav-item-selected' : 'nav-item'} to={route.path}>{route.name}</Link>
                        )
                    })}
                </nav>
            </div>
            {/* Close nav button */}
            <div onClick={toggleMobileMenu} className="close-nav"  hidden={!mobileTabOpen} data-visible={mobileTabOpen}></div>
        </div>

    )
}

export default Nav