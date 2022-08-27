import './CartWidget.css'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    return (
        <Link to='/cart' className="CartWidget">
             <img src='img/cart.jpg' width="30px" alt='CartWidget'/>
            10
        </Link>
        
    )
}

export default CartWidget