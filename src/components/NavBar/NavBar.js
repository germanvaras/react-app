import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from "react-router-dom";
function NavBar(idCategory) {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='nav-ul'>
          <img className="ul-img" src="/logo.png"></img>
          <NavLink to={`category/${idCategory}`} className='ul-li'><li>Anime</li></NavLink>
          <NavLink to={`category/${idCategory}`} className='ul-li'><li>Star Wars</li></NavLink>
          <NavLink to={`category/${idCategory}`} className='ul-li'><li>Marvel</li></NavLink>
          <NavLink to={`category/${idCategory}`} className='ul-li'><li>Series/Peliculas</li></NavLink>
          <CartWidget />
        </ul>
      </nav>
    </header>
  )
}
export default NavBar