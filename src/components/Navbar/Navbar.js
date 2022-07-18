import './Navbar.css'

import Button from '../Button/Button'

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
                <Button handleClick={handleClick} color='red'>Estanterias</Button>
                <Button handleClick={handleClick} color='blue'>Pinturas</Button>
                <Button handleClick={handleClick} color='green'>Escaleras</Button>
                <Button handleClick={handleClick} color='violet'>Hidrolavadoras</Button>
            </div>
            
        </nav>
    )
}

export default Navbar