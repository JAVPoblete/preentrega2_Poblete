import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

function NavBar() {
return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:5173">CELLPHONE</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    < Link className="nav-link" to="/category/celular"> Celulares </Link>
                    </li>
                    <li className="nav-item">
                    < Link className="nav-link" to="/category/tablet"> Tablets </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/category/notebook"> Notebooks </Link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <CartWidget />
                </form>
            </div>
        </div>
        </nav>
    </>
)
}

export default NavBar