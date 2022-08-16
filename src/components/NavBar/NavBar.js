import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='nav-ul'>
        <NavLink to ={"/"}><img className="ul-img" alt="imagen del logo Sublime" src="/logo.png"></img></NavLink>
        <NavLink to={`category/anime`} className='ul-li'><li>Anime</li></NavLink>
        <NavLink to={`category/star-wars`} className='ul-li'><li>Star Wars</li></NavLink>
        <NavLink to={`category/marvel`} className='ul-li'><li>Marvel</li></NavLink>
        <NavLink to={`category/series-peliculas`} className='ul-li'><li>Series/Peliculas</li></NavLink>
        <CartWidget />
      </ul>
    </nav>
    </header >
  )
}
export default NavBar