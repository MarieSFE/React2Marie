import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

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
       
                    <Button handleClick={handleClick} color='red'>Estanterias</Button>
                    <Button handleClick={handleClick} color='blue'>Pinturas</Button>
                    <Button handleClick={handleClick} color='green'>Escaleras</Button>
                    <Button handleClick={handleClick} color='violet'>Hidrolavadoras</Button>

                    <CartWidget />
                </ul>

            </div>
                
        </nav>
    )
}

export default Navbar