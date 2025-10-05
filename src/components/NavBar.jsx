import "../styles/NavBar.css";
import CartWidget from "./CartWidget";

function NavBar() {
    return(
        <nav className="navbar">
            <h1 className="logo">Mi Tienda</h1>

            <ul className="nav-links">
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contactos</li>
            </ul>

            <CartWidget />
        </nav>
    );
}


export default NavBar;