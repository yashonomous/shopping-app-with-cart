import styles from '../styles/Home.module.css';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className={styles['home-page']}>
      <h1>Welcome to the Online Store</h1>

      <ProductList />
    </div>
  );
};

export default Home;
