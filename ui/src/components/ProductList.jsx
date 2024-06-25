import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styles from '../styles/Home.module.css';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  // Add more products as needed
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  // ... existing code

  return (
    <div className={styles['product-list']}>
      {products.map((product) => (
        <div key={product.id} className={styles['product-card']}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
