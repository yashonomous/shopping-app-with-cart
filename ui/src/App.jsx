import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartIcon from './components/CartIcon';
import Home from './components/Home';
import { CartProvider } from './context/CartContext';
import styles from './styles/Home.module.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <nav className={styles['nav-bar']}>
          <Link to="/">Home</Link>
          <CartIcon />
          <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
