import "./NavBar.css";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  const [mobile, setMobile] = React.useState(false)
  return (
    <header className='header'>
      <nav className='header-nav'>
        <NavLink to={"/"}><img className="ul-img" alt="imagen del logo Sublime" src="/logo.png"></img></NavLink>
        <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <NavLink to={`category/anime`} className='ul-li'><li>Anime</li></NavLink>
          <NavLink to={`category/star-wars`} className='ul-li'><li>Star Wars</li></NavLink>
          <NavLink to={`category/marvel`} className='ul-li'><li>Marvel</li></NavLink>
          <NavLink to={`category/series-peliculas`} className='ul-li'><li>Series/Peliculas</li></NavLink>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!mobile)}>
          {mobile ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
        <CartWidget />
      </nav>
    </header >
  )
}
export default NavBar