import '../App.css';
function NavBar(){
    return(
       <header className='header'>
         <nav className='header-nav'>
            <ul className='nav-ul'>
                <a href="#" className='ul-li'><li>Home</li></a>
                <a href="#" className='ul-li'><li>Blog</li></a>
                <a href="#" className='ul-li'><li>Tienda</li></a>
                <a href="#" className='ul-li'><li>Contacto</li></a>
                <a href="#" className='ul-li'><li>Nosotros</li></a>
            </ul>
         </nav>
       </header> 
    )
}
export default NavBar