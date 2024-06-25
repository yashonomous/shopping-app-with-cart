import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from '../styles/Home.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    // Here you would typically handle payment and order processing
    // For the purpose of this simulation, we'll just clear the cart
    clearCart();
    console.log('Checkout successful!');
    // Redirect to a confirmation page or display a message to the user
  };

  return (
    <div className={styles['cart-page']}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className={styles['cart-summary']}>
          <div className={styles['cart-items']}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles['cart-item']}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}>
                  <button
                    className={styles['quantity-btn']}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className={styles['quantity-btn']}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className={styles['cart-checkout']}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}>
              <h3>Total</h3>
              <p>
                ${' '}
                {cartItems
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <button className={styles['clear-cart']} onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
