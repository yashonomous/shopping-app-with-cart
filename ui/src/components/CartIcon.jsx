import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart">
      <div>
        <span>🛒</span>
        <span>{itemCount}</span>
      </div>
    </Link>
  );
};

export default CartIcon;
