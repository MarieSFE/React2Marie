import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav className="NavBar" >
          <Link to='/'>
            <h3>Ecommerce</h3>
          </Link>
          <div className="Categories">
              <NavLink to='/category/Escaleras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Escaleras</NavLink>
              <NavLink to='/category/Pinturas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pinturas</NavLink>
              <NavLink to='/category/Estanterias' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Estanterias</NavLink>
          </div>
          <CartWidget />
      </nav>
  )
}

export default NavBar