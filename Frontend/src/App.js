import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Contexts/CartContext';
import { AuthProvider } from './Contexts/AuthContext';
import { Cart } from './Cart';
import { Footer } from './Footer';
import Products from './Products';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ProductDetails from './ProductDetails';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider><AuthProvider>
          < Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Route path='/create' element={<Create />} /> */}
          </Routes>
          <Footer />
        </AuthProvider></CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
