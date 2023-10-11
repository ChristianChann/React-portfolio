import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';
import "../helperCss/helper.css"


function Navbar () {
    return (
     
     <nav className="flex justify-between bg-black bg-black sticky top-0">
        <div className="flex">
            <Icon icon="simple-icons:similarweb" className="text-white m-3 text-2xl"/>
            <h1 className="text-white font-bold text-2xl tracking-wider m-2">WEB DEVELOPER</h1>
        </div>

        <ul className="text-white flex justify-end m-2">
            <li className="mx-2">
                <NavLink to="home" className={({isActive}) => (isActive ? "acitve" : "link")}>Portfolio</NavLink>
            </li>
            <li className="mx-2">
                <NavLink to="about" className={({isActive}) => (isActive ? "acitve" : "link")}>About Me</NavLink>
            </li>
            <li className="mx-2">
                <NavLink to="skill" className={({isActive}) => (isActive ? "acitve" : "link")}>Skills</NavLink>
            </li>
            <li className="mx-2">
                <NavLink to="services" className={({isActive}) => (isActive ? "acitve" : "link")}>Services</NavLink>
            </li>
            <li className="mx-2">
                <NavLink to="contact" className={({isActive}) => (isActive ? "acitve" : "link")}>Contact</NavLink>
            </li>
        </ul>
     </nav>
    )
}

export default Navbar;