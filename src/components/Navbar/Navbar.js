import './Navbar.css'

import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const text = 'hice click'

    const handleClick = () => {
        console.log(text)
    }

    return (
        <nav className="Navbar">
            <div>
                <h1>Ferreteria</h1>
            </div>
            
            <div>        
                <ul className="nav-list">

                    <Link to='/'>
                         ECOMMERCE
                    </Link>
       
                    <Link to='/category/Estanterias'handleClick={handleClick} color='red'>Estanterias</Link>
                    <Link to='/category/Pinturas' handleClick={handleClick} color='blue'>Pinturas</Link>
                    <Link to='/category/Escaleras'handleClick={handleClick} color='green'>Escaleras</Link>
                    <Link to='/category/Hidrolavadoras'handleClick={handleClick} color='violet'>Hidrolavadoras</Link>

                    <CartWidget />
                </ul>

            </div>
                
        </nav>
    )
}

export default Navbar