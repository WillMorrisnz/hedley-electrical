import { useState } from "react";
import { Link } from "react-router-dom";
import hamburger from '../assets/images/hamburger.svg'



const Nav = () => {
    const [mobileTabOpen, setMobileTabOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0)

    // Toggles the mobile menu overlay
    const toggleMobileMenu = () => {
        setMobileTabOpen(!mobileTabOpen)
    }

    //  Sets the selected tab index for active highlighting and 
    //  knowing when to close the mobile menu window
    const tabSelected = (index) => {
        setSelectedTab(index)
        toggleMobileMenu()
    }

    return(
        <div className='nav-container'>
            <img src={hamburger} onClick={toggleMobileMenu} className="mobile-nav-button"></img>
            <nav hidden={!mobileTabOpen} data-visible={mobileTabOpen}>
                <Link onClick={() => {tabSelected(0)}} className={selectedTab === 0 ? 'nav-item-selected' : 'nav-item'} to={'/'}>Home</Link>
                <Link onClick={() => {tabSelected(1)}} className={selectedTab === 1 ? 'nav-item-selected' : 'nav-item'} to={'/services'}>Services</Link>
                <Link onClick={() => {tabSelected(2)}} className={selectedTab === 2 ? 'nav-item-selected' : 'nav-item'} to={'/about'}>About</Link>
                <Link onClick={() => {tabSelected(3)}} className={selectedTab === 3 ? 'nav-item-selected' : 'nav-item'} to={'/contact'}>Contact</Link>
            </nav>
        </div>
    )
}

export default Nav