import "./NavBar.css";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  const [mobile, setMobile] = React.useState(false)
  let links = [
    {id: 'home', name: 'Home', link: '/'},
    { id: 'anime', name: 'Anime', link: 'category/anime' },
    { id: 'starwars', name: 'Star Wars', link: 'category/star-wars' },
    { id: 'marvel', name: 'Marvel', link: 'category/marvel' },
    { id: 'series-peliculas', name: 'Series/Películas', link: 'category/series-peliculas' },
  ]
  return (
    <header className='header'>
      <nav className='header-nav'>
        <NavLink to={"/"}><img className="ul-img" alt="imagen del logo Sublime" src="/logo.png"></img></NavLink>
        <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        {links.map((link) => (
          <NavLink to={link.link} key={link.id} className='ul-li'>
            <li>{link.name}</li>
          </NavLink>
          ))
        }
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