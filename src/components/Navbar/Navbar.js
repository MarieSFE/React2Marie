import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {


  return (
      <nav className="NavBar" >

            <div>
                <h1>Ferreteria</h1>
            </div>

                <Link to='/'>
                    <h3>Ecommerce</h3>
                </Link>
            <div className="Categories">
              <NavLink to='/category/Estanterias' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Estanterias</NavLink>
              <NavLink to='/category/Pinturas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pinturas</NavLink>
              <NavLink to='/category/Hidrolavadoras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hidrolavadoras</NavLink>
              <NavLink to='/category/Carros' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Carros</NavLink>
          </div>
          <CartWidget />
      </nav>
  )
}

export default NavBar